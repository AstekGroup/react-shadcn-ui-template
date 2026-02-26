import { Separator } from '@/components/ui/separator'
import { ExternalLink } from 'lucide-react'
import { BackgroundGradientAnimation } from './components/background-gradient-animation'
import { BackgroundBeams } from './components/background-beams'
import { TextGenerateEffect } from './components/text-generate-effect'
import { TypewriterEffect } from './components/typewriter-effect'
import { Spotlight } from './components/spotlight'
import { LampEffect } from './components/lamp-effect'
import { CardContainer, CardBody, CardItem } from './components/three-d-card'
import {
  GlowingStarsCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from './components/glowing-stars-card'
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from './components/text-reveal-card'
import { MovingBorder } from './components/moving-border'
import { InfiniteMovingCards } from './components/infinite-moving-cards'

const testimonials = [
  {
    quote:
      'This template saved us weeks of development time. The component system is incredibly well thought out.',
    name: 'Sarah Chen',
    title: 'CTO at TechStart',
  },
  {
    quote:
      'The animation quality is outstanding. Our users love the polished feel of every interaction.',
    name: 'Marcus Johnson',
    title: 'Lead Developer at DesignCo',
  },
  {
    quote:
      'Finally a UI library that balances aesthetics with performance. Zero compromises.',
    name: 'Elena Rodriguez',
    title: 'Frontend Architect at ScaleUp',
  },
  {
    quote:
      'Copy-paste components that actually work in production. This is what every developer needs.',
    name: 'David Kim',
    title: 'Senior Engineer at BuildFast',
  },
  {
    quote:
      'The attention to detail in these animations is remarkable. Each component feels premium.',
    name: 'Aria Patel',
    title: 'Design Engineer at Pixel Labs',
  },
]

export const AceternitySampler = () => {
  return (
    <div className="space-y-10">
      {/* Link to Aceternity */}
      <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3">
        <span className="text-sm text-muted-foreground">
          This page showcases a selection of components from{' '}
          <a
            href="https://ui.aceternity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            Aceternity UI
            <ExternalLink className="h-3 w-3" />
          </a>{' '}
          — a collection of 50+ copy-paste animated components for React, built
          with Tailwind CSS and Motion.
        </span>
      </div>

      {/* Animated Backgrounds */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Animated Backgrounds</h2>
        <Separator />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              BackgroundGradientAnimation — Aurora gradient with floating
              circles
            </p>
            <div className="h-[200px] overflow-hidden rounded-xl border border-border">
              <BackgroundGradientAnimation interactive={false}>
                <div className="flex h-full items-center justify-center">
                  <span className="z-10 text-2xl font-bold text-white drop-shadow-lg">
                    Aurora
                  </span>
                </div>
              </BackgroundGradientAnimation>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              BackgroundBeams — Animated SVG light beams
            </p>
            <div className="relative h-[200px] overflow-hidden rounded-xl border border-border bg-slate-950">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="z-10 text-2xl font-bold text-white">
                  Beams
                </span>
              </div>
              <BackgroundBeams />
            </div>
          </div>
        </div>
      </section>

      {/* Text Animations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Text Animations</h2>
        <Separator />
        <div className="space-y-8">
          {/* TextGenerateEffect */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              TextGenerateEffect — Words appearing one by one with fade & blur
            </p>
            <TextGenerateEffect
              words="Build beautiful interfaces with stunning animated components that captivate your users"
              className="text-2xl"
            />
          </div>

          {/* TypewriterEffect */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              TypewriterEffect — Typewriter animation with blinking cursor
            </p>
            <TypewriterEffect
              words={[
                { text: 'Build' },
                { text: 'amazing' },
                { text: 'apps' },
                { text: 'with' },
                { text: 'Aceternity', className: 'text-primary' },
              ]}
              className="text-2xl"
            />
          </div>
        </div>
      </section>

      {/* Spotlight & Lamp */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Spotlight & Lamp</h2>
        <Separator />
        <div className="space-y-6">
          {/* Spotlight */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Spotlight — Animated SVG spotlight beam
            </p>
            <div className="relative flex h-[200px] items-center justify-center overflow-hidden rounded-xl border border-border bg-slate-950">
              <Spotlight className="-top-20 left-0 md:-top-20 md:left-60" />
              <div className="relative z-10 text-center">
                <h3 className="bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-bold text-transparent">
                  Spotlight Effect
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  A dramatic lighting effect for hero sections
                </p>
              </div>
            </div>
          </div>

          {/* LampEffect */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              LampEffect — Gradient lamp reveal inspired by Linear.app
            </p>
            <LampEffect>
              <h3 className="bg-linear-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl">
                Illuminate Ideas
              </h3>
            </LampEffect>
          </div>
        </div>
      </section>

      {/* Interactive Cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Interactive Cards</h2>
        <Separator />
        <div className="grid gap-6 md:grid-cols-2">
          {/* 3D Card */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              ThreeDCard — Perspective 3D tilt on hover
            </p>
            <CardContainer className="w-full">
              <CardBody className="group/card relative h-auto w-full rounded-xl border border-border bg-card p-6">
                <CardItem
                  translateZ="50"
                  className="text-lg font-bold text-foreground"
                >
                  3D Perspective Card
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-sm text-muted-foreground"
                >
                  Hover over this card to see the 3D perspective tilt effect
                  with layered depth on each element.
                </CardItem>
                <CardItem translateZ="100" className="mt-4 w-full">
                  <div className="flex h-32 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-purple-500">
                    <span className="text-lg font-bold text-white">
                      Hover Me
                    </span>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          {/* Glowing Stars Card */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              GlowingStarsCard — Grid of twinkling stars on hover
            </p>
            <GlowingStarsCard>
              <GlowingStarsTitle>Next-gen animations</GlowingStarsTitle>
              <div className="flex items-end justify-between">
                <GlowingStarsDescription>
                  Hover to see stars illuminate with a beautiful glow effect.
                </GlowingStarsDescription>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#232323]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 stroke-2 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </GlowingStarsCard>
          </div>
        </div>

        {/* Text Reveal Card */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            TextRevealCard — Reveal text by moving cursor
          </p>
          <TextRevealCard
            text="You know the business"
            revealText="I know the chemistry"
          >
            <TextRevealCardTitle>
              Sometimes, you just need to see it.
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              Move your mouse over the card to reveal the hidden text.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>
      </section>

      {/* Decorative Effects */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Decorative Effects</h2>
        <Separator />
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            MovingBorder — Animated gradient border traveling along the contour
          </p>
          <div className="flex flex-wrap gap-4">
            <MovingBorder
              duration={3000}
              containerClassName="rounded-full"
              className="rounded-full"
            >
              Moving Border
            </MovingBorder>
            <MovingBorder
              duration={4000}
              containerClassName="rounded-lg"
              className="rounded-lg"
            >
              Rounded Variant
            </MovingBorder>
            <MovingBorder
              duration={2000}
              containerClassName="rounded-xl"
              className="rounded-xl"
            >
              Fast Border
            </MovingBorder>
          </div>
        </div>
      </section>

      {/* Infinite Moving Cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Infinite Moving Cards</h2>
        <Separator />
        <p className="text-sm text-muted-foreground">
          InfiniteMovingCards — Infinite scroll of testimonial cards, hover to
          pause
        </p>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </section>
    </div>
  )
}
