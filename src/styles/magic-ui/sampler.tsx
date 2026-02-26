import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Cloud,
  ExternalLink,
  Github,
  Globe,
  Heart,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react'
import { AnimatedGradientText } from './components/animated-gradient-text'
import { HyperText } from './components/hyper-text'
import { NumberTicker } from './components/number-ticker'
import { RetroGrid } from './components/retro-grid'
import { Particles } from './components/particles'
import { Meteors } from './components/meteors'
import { MagicCard } from './components/magic-card'
import { BorderBeam } from './components/border-beam'
import { ShimmerButton } from './components/shimmer-button'
import { Marquee } from './components/marquee'
import { OrbitingCircles } from './components/orbiting-circles'

export const MagicUiSampler = () => {
  return (
    <div className="space-y-10">
      {/* Link to Magic UI */}
      <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3">
        <span className="text-sm text-muted-foreground">
          This page showcases a selection of components from{' '}
          <a
            href="https://magicui.design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            Magic UI
            <ExternalLink className="h-3 w-3" />
          </a>{' '}
          — a collection of 50+ free and open-source animated components built
          with React, TypeScript, Tailwind CSS, and Motion.
        </span>
      </div>

      {/* Animated Backgrounds */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Animated Backgrounds</h2>
        <Separator />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              RetroGrid — 3D perspective grid with scrolling animation
            </p>
            <div className="relative h-[200px] overflow-hidden rounded-xl border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="z-10 bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-3xl font-bold tracking-tighter text-transparent">
                  Retro Grid
                </span>
              </div>
              <RetroGrid />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Particles — Floating particles with cursor tracking
            </p>
            <div className="relative h-[200px] overflow-hidden rounded-xl border border-border bg-black">
              <Particles
                className="absolute inset-0"
                quantity={80}
                ease={80}
                color="#ffffff"
                size={0.5}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="z-10 text-3xl font-bold tracking-tighter text-white">
                  Particles
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Animations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Text Animations</h2>
        <Separator />
        <div className="space-y-8">
          {/* AnimatedGradientText */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              AnimatedGradientText — Sweeping gradient across text
            </p>
            <AnimatedGradientText
              speed={2}
              colorFrom="#ffaa40"
              colorTo="#9c40ff"
              className="text-3xl font-bold"
            >
              Animated Gradient Text
            </AnimatedGradientText>
          </div>

          {/* HyperText */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              HyperText — Hover to scramble and reveal letters
            </p>
            <HyperText className="text-3xl font-bold text-foreground">
              Hover Me To Decrypt
            </HyperText>
          </div>

          {/* NumberTicker */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              NumberTicker — Animated counting with spring physics
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <NumberTicker value={19000} className="text-4xl font-bold" />
                <p className="text-xs text-muted-foreground">GitHub Stars</p>
              </div>
              <div className="text-center">
                <NumberTicker
                  value={99.9}
                  decimalPlaces={1}
                  className="text-4xl font-bold"
                />
                <p className="text-xs text-muted-foreground">Uptime %</p>
              </div>
              <div className="text-center">
                <NumberTicker value={50} className="text-4xl font-bold" />
                <p className="text-xs text-muted-foreground">Components</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Interactive Cards</h2>
        <Separator />
        <div className="grid gap-6 md:grid-cols-2">
          <MagicCard
            gradientColor="rgba(120, 119, 198, 0.15)"
            gradientSize={250}
          >
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Magic Card
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Move your cursor over this card to see the gradient spotlight
                effect following your mouse position.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">19k+</div>
                  <div className="text-xs text-muted-foreground">Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-xs text-muted-foreground">
                    Components
                  </div>
                </div>
              </div>
            </div>
          </MagicCard>

          <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Border Beam
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              An animated beam of light traveling along the border of this card.
              Fully customizable colors and speed.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">60fps</div>
                <div className="text-xs text-muted-foreground">Smooth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">MIT</div>
                <div className="text-xs text-muted-foreground">License</div>
              </div>
            </div>
            <BorderBeam
              size={80}
              duration={8}
              colorFrom="#ffaa40"
              colorTo="#9c40ff"
            />
          </div>
        </div>
      </section>

      {/* Decorative Effects */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Decorative Effects</h2>
        <Separator />
        <div className="space-y-6">
          {/* Meteors */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Meteors — Falling meteor shower effect
            </p>
            <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-card">
              <span className="z-10 text-2xl font-bold text-foreground">
                Meteor Shower
              </span>
              <Meteors number={20} />
            </div>
          </div>

          {/* OrbitingCircles */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              OrbitingCircles — Icons orbiting around a center point
            </p>
            <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-card">
              <span className="z-10 text-sm font-medium text-muted-foreground">
                Magic UI
              </span>
              <OrbitingCircles iconSize={28} radius={80} speed={1.5}>
                <Heart className="size-5 text-pink-500" />
                <Star className="size-5 text-yellow-500" />
                <Zap className="size-5 text-blue-500" />
                <Sparkles className="size-5 text-purple-500" />
              </OrbitingCircles>
              <OrbitingCircles iconSize={32} radius={140} speed={1} reverse>
                <Github className="size-5 text-foreground" />
                <Globe className="size-5 text-green-500" />
                <Cloud className="size-5 text-sky-500" />
              </OrbitingCircles>
            </div>
          </div>

          {/* ShimmerButton */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              ShimmerButton — Button with rotating shimmer effect
            </p>
            <div className="flex flex-wrap gap-4">
              <ShimmerButton>
                <span className="text-sm font-medium">Get Started</span>
              </ShimmerButton>
              <ShimmerButton
                shimmerColor="#a855f7"
                background="rgba(88, 28, 135, 1)"
              >
                <span className="text-sm font-medium">Purple Shimmer</span>
              </ShimmerButton>
              <ShimmerButton
                shimmerColor="#22d3ee"
                background="rgba(8, 51, 68, 1)"
              >
                <span className="text-sm font-medium">Cyan Shimmer</span>
              </ShimmerButton>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Marquee</h2>
        <Separator />
        <p className="text-sm text-muted-foreground">
          Marquee — Infinite scrolling content, hover to pause
        </p>
        <Marquee pauseOnHover className="[--duration:25s]">
          {[
            'React',
            'TypeScript',
            'Tailwind',
            'Motion',
            'Vite',
            'Shadcn',
            'Magic UI',
            'Open Source',
          ].map((text) => (
            <Badge
              key={text}
              variant="secondary"
              className="mx-1 px-4 py-2 text-sm"
            >
              {text}
            </Badge>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {[
            'Copy & Paste',
            'Accessible',
            'Responsive',
            'Dark Mode',
            'Animated',
            'Customizable',
            'Lightweight',
            'MIT License',
          ].map((text) => (
            <Badge
              key={text}
              variant="outline"
              className="mx-1 px-4 py-2 text-sm"
            >
              {text}
            </Badge>
          ))}
        </Marquee>
      </section>
    </div>
  )
}
