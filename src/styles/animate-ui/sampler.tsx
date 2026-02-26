import { Separator } from '@/components/ui/separator'
import { ExternalLink } from 'lucide-react'
import { SlidingNumber } from './components/sliding-number'
import { MorphingText } from './components/morphing-text'
import { TypingText } from './components/typing-text'
import { GradientText } from './components/gradient-text'
import { GradientBackground } from './components/gradient-background'
import { StarsBackground } from './components/stars-background'
import { RippleButton } from './components/ripple-button'
import { LiquidButton } from './components/liquid-button'
import { FlipCard } from './components/flip-card'
import { MagneticEffect } from './components/magnetic-effect'
import { ShineEffect } from './components/shine-effect'

export const AnimateUiSampler = () => {
  return (
    <div className="space-y-10">
      {/* Link to Animate UI */}
      <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3">
        <span className="text-sm text-muted-foreground">
          This page showcases a selection of components from{' '}
          <a
            href="https://animate-ui.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            Animate UI
            <ExternalLink className="h-3 w-3" />
          </a>{' '}
          — a fully animated, open-source component distribution built on the
          shadcn registry model, powered by Motion and Tailwind CSS.
        </span>
      </div>

      {/* Animated Backgrounds */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Animated Backgrounds</h2>
        <Separator />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              GradientBackground — Animated shifting gradient
            </p>
            <div className="h-[200px] overflow-hidden rounded-xl border border-border">
              <GradientBackground
                colors={['#4158d0', '#c850c0', '#ffcc70', '#4158d0']}
                animationSpeed={8}
              >
                <div className="flex h-full items-center justify-center">
                  <span className="text-2xl font-bold text-white drop-shadow-lg">
                    Gradient
                  </span>
                </div>
              </GradientBackground>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              StarsBackground — Canvas-powered twinkling starfield
            </p>
            <div className="relative h-[200px] overflow-hidden rounded-xl border border-border bg-slate-950">
              <StarsBackground starCount={150} starColor="#ffffff" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="z-10 text-2xl font-bold text-white">
                  Stars
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Effects */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Text Effects</h2>
        <Separator />
        <div className="space-y-8">
          {/* SlidingNumber */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              SlidingNumber — Digits slide in slot-machine style on change
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <SlidingNumber
                  value={19842}
                  thousandSeparator=","
                  className="text-4xl font-bold"
                />
                <p className="text-xs text-muted-foreground">GitHub Stars</p>
              </div>
              <div className="text-center">
                <SlidingNumber value={99} className="text-4xl font-bold" />
                <p className="text-xs text-muted-foreground">Components</p>
              </div>
              <div className="text-center">
                <SlidingNumber
                  value={4.9}
                  decimalPlaces={1}
                  className="text-4xl font-bold"
                />
                <p className="text-xs text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* MorphingText */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              MorphingText — Blur morph between words on a timer
            </p>
            <div className="flex items-center gap-2 text-3xl font-bold">
              <span>Build</span>
              <MorphingText
                texts={['faster', 'smarter', 'better', 'beautifully']}
                className="text-primary"
                interval={2000}
              />
            </div>
          </div>

          {/* TypingText */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              TypingText — Typewriter with animated cursor, supports looping
            </p>
            <div className="text-3xl font-bold">
              <TypingText
                text="Animate everything with Motion."
                speed={55}
                loop
                loopDelay={1800}
              />
            </div>
          </div>

          {/* GradientText */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              GradientText — Animated gradient sweep across text
            </p>
            <GradientText
              colors={['#a855f7', '#3b82f6', '#10b981', '#f59e0b', '#a855f7']}
              animationSpeed={6}
              className="text-3xl font-bold"
            >
              Beautiful animated gradient text
            </GradientText>
          </div>
        </div>
      </section>

      {/* Interactive Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Interactive Buttons</h2>
        <Separator />
        <div className="space-y-6">
          {/* RippleButton */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              RippleButton — Material-style ripple effect on every click
            </p>
            <div className="flex flex-wrap gap-4">
              <RippleButton rippleColor="rgba(255,255,255,0.5)">
                Click me
              </RippleButton>
              <RippleButton
                className="bg-violet-600"
                rippleColor="rgba(255,255,255,0.4)"
              >
                Purple ripple
              </RippleButton>
              <RippleButton
                className="bg-emerald-600"
                rippleColor="rgba(255,255,255,0.4)"
              >
                Green ripple
              </RippleButton>
            </div>
          </div>

          {/* LiquidButton */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              LiquidButton — Liquid fill rising from bottom on hover
            </p>
            <div className="flex flex-wrap gap-4">
              <LiquidButton variant="outline">Hover me</LiquidButton>
              <LiquidButton variant="outline">Get started</LiquidButton>
              <LiquidButton variant="primary">Primary fill</LiquidButton>
            </div>
          </div>
        </div>
      </section>

      {/* Effects & Wrappers */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Effects & Wrappers</h2>
        <Separator />
        <div className="space-y-6">
          {/* MagneticEffect */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              MagneticEffect — Element magnetically follows the cursor
            </p>
            <div className="flex flex-wrap gap-6">
              <MagneticEffect strength={0.4}>
                <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg">
                  Magnetic Button
                </button>
              </MagneticEffect>
              <MagneticEffect strength={0.6}>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-500 text-white shadow-lg text-xl">
                  ✦
                </div>
              </MagneticEffect>
              <MagneticEffect strength={0.3}>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 text-white shadow-lg text-xl font-bold">
                  AI
                </div>
              </MagneticEffect>
            </div>
          </div>

          {/* ShineEffect */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              ShineEffect — Glossy shine sweep on hover
            </p>
            <div className="flex flex-wrap gap-4">
              <ShineEffect className="rounded-lg">
                <div className="rounded-lg bg-card border border-border px-6 py-4 text-sm font-medium">
                  Hover for shine ✨
                </div>
              </ShineEffect>
              <ShineEffect className="rounded-full" duration={0.5}>
                <button className="rounded-full bg-slate-800 px-6 py-2.5 text-sm font-semibold text-white">
                  Dark Shine
                </button>
              </ShineEffect>
              <ShineEffect className="rounded-xl" shineOpacity={0.5}>
                <div className="rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-4 text-sm font-bold text-white">
                  Gradient Card
                </div>
              </ShineEffect>
            </div>
          </div>
        </div>
      </section>

      {/* Flip Cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Flip Cards</h2>
        <Separator />
        <p className="text-sm text-muted-foreground">
          FlipCard — 3D card that flips to reveal the back on click
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <FlipCard
            className="h-44"
            front={
              <div className="flex h-full items-center justify-center rounded-xl border border-border bg-card p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">01</div>
                  <p className="mt-1 text-sm font-medium">Click to flip</p>
                  <p className="text-xs text-muted-foreground">Front side</p>
                </div>
              </div>
            }
            back={
              <div className="flex h-full items-center justify-center rounded-xl bg-primary p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground">
                    ✓
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary-foreground">
                    Back revealed!
                  </p>
                  <p className="text-xs text-primary-foreground/70">
                    Click again to flip back
                  </p>
                </div>
              </div>
            }
          />
          <FlipCard
            className="h-44"
            front={
              <div className="flex h-full items-center justify-center rounded-xl border border-border bg-gradient-to-br from-violet-500 to-purple-600 p-6">
                <div className="text-center text-white">
                  <div className="text-3xl">🎴</div>
                  <p className="mt-2 text-sm font-semibold">Card Two</p>
                  <p className="text-xs opacity-75">Click to reveal</p>
                </div>
              </div>
            }
            back={
              <div className="flex h-full items-center justify-center rounded-xl border border-border bg-gradient-to-br from-pink-500 to-rose-600 p-6">
                <div className="text-center text-white">
                  <div className="text-3xl">✨</div>
                  <p className="mt-2 text-sm font-semibold">Surprise!</p>
                  <p className="text-xs opacity-75">Beautiful back side</p>
                </div>
              </div>
            }
          />
          <FlipCard
            className="h-44"
            flipDirection="vertical"
            front={
              <div className="flex h-full items-center justify-center rounded-xl border border-border bg-card p-6">
                <div className="text-center">
                  <div className="text-3xl">↕</div>
                  <p className="mt-2 text-sm font-medium">Vertical Flip</p>
                  <p className="text-xs text-muted-foreground">
                    Click to flip vertically
                  </p>
                </div>
              </div>
            }
            back={
              <div className="flex h-full items-center justify-center rounded-xl bg-emerald-600 p-6">
                <div className="text-center text-white">
                  <div className="text-3xl">🌿</div>
                  <p className="mt-2 text-sm font-semibold">Vertical back!</p>
                </div>
              </div>
            }
          />
        </div>
      </section>
    </div>
  )
}
