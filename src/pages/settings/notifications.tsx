import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'

export function NotificationSettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose what notifications you want to receive.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="email-notifications">Email notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive email notifications for important updates and activity.
            </p>
          </div>
          <Switch id="email-notifications" defaultChecked />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="push-notifications">Push notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive push notifications on your device for real-time alerts.
            </p>
          </div>
          <Switch id="push-notifications" defaultChecked />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="marketing-emails">Marketing emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about new features, tips, and product updates.
            </p>
          </div>
          <Switch id="marketing-emails" />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="weekly-digest">Weekly digest</Label>
            <p className="text-sm text-muted-foreground">
              Get a weekly summary of your account activity and metrics.
            </p>
          </div>
          <Switch id="weekly-digest" defaultChecked />
        </div>

        <Separator />

        <div className="flex justify-end">
          <Button>Save changes</Button>
        </div>
      </CardContent>
    </Card>
  )
}
