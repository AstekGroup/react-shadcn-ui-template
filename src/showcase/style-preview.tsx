import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { useStyle } from '@/styles/style-provider'
import { ReactBitsSampler } from '@/styles/react-bits/sampler'
import { MagicUiSampler } from '@/styles/magic-ui/sampler'
import { AceternitySampler } from '@/styles/aceternity/sampler'
import { AnimateUiSampler } from '@/styles/animate-ui/sampler'
import { styleVariants } from '@/styles/registry'
import type { StyleId } from '@/styles/types'
import { BackToShowcase } from '@/showcase/components/back-to-showcase'
import { AlertCircle, Info } from 'lucide-react'
import type { ComponentType } from 'react'
import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router'

const samplers: Partial<Record<StyleId, ComponentType>> = {
  'react-bits': ReactBitsSampler,
  'magic-ui': MagicUiSampler,
  aceternity: AceternitySampler,
  'animate-ui': AnimateUiSampler,
}

function DefaultSampler() {
  return (
    <>
      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <Separator />
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cards</h2>
        <Separator />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
              <CardDescription>
                A sample card showing title and description content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cards are used to group related content and actions. They
                provide a clear visual boundary around information.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Report</CardTitle>
              <CardDescription>
                Overview of key metrics for the current period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-xs text-muted-foreground">Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$5.6k</div>
                  <div className="text-xs text-muted-foreground">Revenue</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inputs & Forms */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Inputs & Forms</h2>
        <Separator />
        <div className="max-w-md space-y-6">
          <div className="space-y-2">
            <Label htmlFor="preview-email">Email</Label>
            <Input
              id="preview-email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="preview-message">Message</Label>
            <Textarea
              id="preview-message"
              placeholder="Type your message here..."
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="preview-terms" />
            <Label htmlFor="preview-terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="preview-notifications" />
            <Label htmlFor="preview-notifications">Enable notifications</Label>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badges</h2>
        <Separator />
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Alerts */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Alerts</h2>
        <Separator />
        <div className="max-w-lg space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is a default alert for general information.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again later.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Progress */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Progress</h2>
        <Separator />
        <div className="max-w-md space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Upload progress</span>
            <span className="font-medium">60%</span>
          </div>
          <Progress value={60} />
        </div>
      </section>
    </>
  )
}

export function StylePreview() {
  const { styleId } = useParams<{ styleId: string }>()
  const { setStyleId } = useStyle()

  const isValid = styleId && styleId in styleVariants
  const variant = isValid ? styleVariants[styleId as StyleId] : null

  useEffect(() => {
    if (isValid) {
      setStyleId(styleId as StyleId)
    }
    return () => {
      setStyleId('default')
    }
  }, [isValid, styleId, setStyleId])

  if (!isValid || !variant) {
    return <Navigate to="/showcase/styles" replace />
  }

  const Sampler = samplers[styleId as StyleId] ?? DefaultSampler

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold tracking-tight">
              {variant.label}
            </h1>
            <p className="mt-1 text-muted-foreground">{variant.description}</p>
          </div>
        </div>

        {/* Component Sampler */}
        <div className="container mx-auto space-y-10 px-6 py-10">
          <Sampler />
        </div>
      </div>
      <BackToShowcase />
    </>
  )
}
