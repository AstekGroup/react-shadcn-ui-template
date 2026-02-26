import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

export function GeneralSettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>General</CardTitle>
        <CardDescription>
          Configure your language, timezone, and display preferences.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select defaultValue="en">
            <SelectTrigger id="language" className="w-full max-w-xs">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="pt">Portuguese</SelectItem>
              <SelectItem value="ja">Japanese</SelectItem>
              <SelectItem value="zh">Chinese</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Select defaultValue="utc">
            <SelectTrigger id="timezone" className="w-full max-w-xs">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
              <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
              <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
              <SelectItem value="mst">MST (Mountain Standard Time)</SelectItem>
              <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
              <SelectItem value="cet">CET (Central European Time)</SelectItem>
              <SelectItem value="jst">JST (Japan Standard Time)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div className="space-y-3">
          <Label>Date format</Label>
          <RadioGroup defaultValue="mm-dd-yyyy" className="space-y-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="mm-dd-yyyy" id="mm-dd-yyyy" />
              <Label htmlFor="mm-dd-yyyy" className="font-normal">
                MM/DD/YYYY
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="dd-mm-yyyy" id="dd-mm-yyyy" />
              <Label htmlFor="dd-mm-yyyy" className="font-normal">
                DD/MM/YYYY
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="yyyy-mm-dd" id="yyyy-mm-dd" />
              <Label htmlFor="yyyy-mm-dd" className="font-normal">
                YYYY-MM-DD
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        <div className="flex justify-end">
          <Button>Save changes</Button>
        </div>
      </CardContent>
    </Card>
  )
}
