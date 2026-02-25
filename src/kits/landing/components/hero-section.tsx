import { Button } from '@/components/ui/button'
import { heroData, statsData } from '../data/mock-data'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container mx-auto max-w-6xl px-4 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
              {heroData.title}
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            {heroData.subtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button size="lg" className="min-w-[180px] text-base">
              {heroData.primaryCta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[180px] text-base"
            >
              {heroData.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {statsData.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-3xl font-bold tracking-tight md:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
