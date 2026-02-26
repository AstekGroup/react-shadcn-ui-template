import { Separator } from '@/components/ui/separator'
import { ExternalLink } from 'lucide-react'
import { BlurText } from './components/blur-text'
import { ShinyText } from './components/shiny-text'
import { GradientText } from './components/gradient-text'
import { DecryptedText } from './components/decrypted-text'
import { RotatingText } from './components/rotating-text'
import { CountUp } from './components/count-up'
import { SpotlightCard } from './components/spotlight-card'
import { StarBorder } from './components/star-border'
import { ClickSpark } from './components/click-spark'
import { Squares } from './components/squares'
import { LetterGlitch } from './components/letter-glitch'

export const ReactBitsSampler = () => {
  return (
    <div className="space-y-10">
      {/* Link to React Bits */}
      <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3">
        <span className="text-sm text-muted-foreground">
          This page showcases a selection of components from{' '}
          <a
            href="https://reactbits.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            React Bits
            <ExternalLink className="h-3 w-3" />
          </a>{' '}
          — a collection of 180+ animated and interactive React components.
        </span>
      </div>

      {/* Animated Backgrounds */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Animated Backgrounds</h2>
        <Separator />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Squares — Animated grid with hover highlight
            </p>
            <div className="h-[200px] overflow-hidden rounded-xl border border-border">
              <Squares
                direction="diagonal"
                speed={0.5}
                borderColor="rgba(255,255,255,0.1)"
                hoverFillColor="rgba(120,119,198,0.3)"
                squareSize={40}
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              LetterGlitch — Matrix-style glitching characters
            </p>
            <div className="h-[200px] overflow-hidden rounded-xl border border-border">
              <LetterGlitch
                glitchColors={['#5227FF', '#FF9FFC', '#00D4FF']}
                glitchSpeed={50}
                smooth
                outerVignette
              />
            </div>
          </div>
        </div>
      </section>

      {/* Text Animations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Text Animations</h2>
        <Separator />
        <div className="space-y-8">
          {/* BlurText */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              BlurText — Animated blur reveal on scroll
            </p>
            <BlurText
              text="Animated text with blur reveal"
              className="text-3xl font-bold"
              delay={150}
              animateBy="words"
            />
          </div>

          {/* ShinyText */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              ShinyText — Sweeping shine effect
            </p>
            <ShinyText
              text="Shiny sweeping text animation"
              className="text-3xl font-bold"
              speed={3}
            />
          </div>

          {/* GradientText */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              GradientText — Animated multicolor gradient
            </p>
            <GradientText
              className="text-3xl font-bold"
              colors={['#5227FF', '#FF9FFC', '#00D4FF', '#B19EEF']}
              animationSpeed={6}
            >
              Gradient animated heading
            </GradientText>
          </div>

          {/* DecryptedText */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              DecryptedText — Hover to decrypt
            </p>
            <DecryptedText
              text="Hover me to decrypt this text"
              className="text-foreground"
              encryptedClassName="text-muted-foreground/50"
              parentClassName="text-3xl font-bold"
              speed={60}
              maxIterations={15}
              animateOn="hover"
              sequential
              revealDirection="start"
            />
          </div>

          {/* RotatingText */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              RotatingText — Auto-rotating text with spring animation
            </p>
            <div className="flex items-center gap-2 text-3xl font-bold">
              <span>Build</span>
              <RotatingText
                texts={['faster', 'smarter', 'better', 'together']}
                mainClassName="overflow-hidden text-primary"
                staggerFrom="last"
                staggerDuration={0.025}
                rotationInterval={2500}
              />
            </div>
          </div>

          {/* CountUp */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              CountUp — Animated number counter on scroll
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <CountUp
                  to={1234}
                  separator=","
                  className="text-4xl font-bold text-foreground"
                  duration={2}
                />
                <p className="text-xs text-muted-foreground">Users</p>
              </div>
              <div className="text-center">
                <CountUp
                  to={99.9}
                  className="text-4xl font-bold text-foreground"
                  duration={2.5}
                />
                <p className="text-xs text-muted-foreground">Uptime %</p>
              </div>
              <div className="text-center">
                <CountUp
                  to={50}
                  className="text-4xl font-bold text-foreground"
                  duration={1.5}
                />
                <p className="text-xs text-muted-foreground">Countries</p>
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
          <SpotlightCard spotlightColor="rgba(120, 119, 198, 0.3)">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Spotlight Card
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Move your cursor over this card to see the spotlight effect
                following your mouse position.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">2.4k</div>
                  <div className="text-xs text-muted-foreground">Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">180+</div>
                  <div className="text-xs text-muted-foreground">
                    Components
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(14, 165, 233, 0.3)">
            <div className="relative z-10">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Cursor Tracking
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                The radial gradient follows your cursor with a smooth
                transition, creating an interactive lighting effect.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    60fps
                  </div>
                  <div className="text-xs text-muted-foreground">Smooth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    0 deps
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Lightweight
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Decorative Elements */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Decorative Elements</h2>
        <Separator />
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              StarBorder — Animated star trail border
            </p>
            <div className="flex flex-wrap gap-4">
              <StarBorder color="#5227FF" speed="5s">
                Purple star border
              </StarBorder>
              <StarBorder color="#FF9FFC" speed="4s">
                Pink star border
              </StarBorder>
              <StarBorder color="#00D4FF" speed="7s">
                Cyan star border
              </StarBorder>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              ClickSpark — Click anywhere in this area for spark particles
            </p>
            <div className="h-[120px] overflow-hidden rounded-xl border border-border bg-card">
              <ClickSpark
                sparkColor="#5227FF"
                sparkSize={12}
                sparkRadius={20}
                sparkCount={10}
                duration={500}
              >
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">
                    Click anywhere in this box
                  </p>
                </div>
              </ClickSpark>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
