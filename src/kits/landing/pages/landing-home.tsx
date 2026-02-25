import { CtaSection } from '../components/cta-section'
import { FaqSection } from '../components/faq-section'
import { FeaturesGrid } from '../components/features-grid'
import { HeroSection } from '../components/hero-section'
import { PricingTable } from '../components/pricing-table'
import { Testimonials } from '../components/testimonials'

export function LandingHome() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesGrid />
      <PricingTable />
      <Testimonials />
      <FaqSection />
      <CtaSection />
    </div>
  )
}
