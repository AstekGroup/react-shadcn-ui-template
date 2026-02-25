interface PageShellProps {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return <div className="space-y-6">{children}</div>
}
