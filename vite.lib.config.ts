import { copyFileSync } from 'node:fs'
import { relative, resolve } from 'node:path'
import { globSync } from 'glob'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json' with { type: 'json' }

const root = import.meta.dirname

// --- Robust externals: never bundle react/react-dom/react-router nor any
// runtime dependency. Match bare imports AND subpaths (react/jsx-runtime,
// @radix-ui/react-*, lucide-react, etc.). ---
const externalNames = [
  ...Object.keys(pkg.peerDependencies ?? {}),
  ...Object.keys(pkg.dependencies ?? {}),
]
function external(id: string) {
  if (id === 'react/jsx-runtime' || id === 'react/jsx-dev-runtime') return true
  return externalNames.some((n) => id === n || id.startsWith(`${n}/`))
}

// --- One entry per source file (preserveModules is unsupported under Rolldown).
// Keeps the dist structure 1:1 with src so subpath exports resolve directly. ---
const entries = Object.fromEntries(
  globSync('src/**/*.{ts,tsx}', {
    cwd: root,
    ignore: [
      'src/**/*.d.ts',
      'src/**/*.test.*',
      'src/**/*.stories.*',
      'src/main.tsx',
      'src/App.tsx',
      'src/lib/router.tsx',
      'src/showcase/**',
    ],
  }).map((file) => [
    relative('src', file).replace(/\.[^.]+$/, ''),
    resolve(root, file),
  ])
)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.lib.json',
      entryRoot: 'src',
      outDir: 'dist',
      insertTypesEntry: true,
      rollupTypes: false,
    }),
    {
      // Ship the raw design-system primitives (NOT Tailwind-compiled). The
      // consumer @imports this into their own Tailwind entry. See styles.css.
      name: 'copy-styles-css',
      closeBundle() {
        copyFileSync(
          resolve(root, 'src/styles.css'),
          resolve(root, 'dist/styles.css')
        )
      },
    },
  ],
  resolve: {
    alias: { '@': resolve(root, './src') },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: false,
    cssCodeSplit: false,
    sourcemap: true,
    lib: {
      entry: entries,
      formats: ['es'],
    },
    rollupOptions: {
      external,
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name][extname]',
      },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
        warn(warning)
      },
    },
  },
})
