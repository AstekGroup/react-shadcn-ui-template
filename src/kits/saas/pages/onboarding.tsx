import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'
import { OnboardingWizard } from '@/kits/saas/components/onboarding-wizard'

export function OnboardingPage() {
  return (
    <PageShell>
      <PageHeader
        title="Getting Started"
        description="Complete the setup steps to get the most out of your workspace"
      />
      <OnboardingWizard />
    </PageShell>
  )
}
