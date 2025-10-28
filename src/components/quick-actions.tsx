import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Plus, Settings, Users } from 'lucide-react'

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Frequently used actions for your workflow</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button className="w-full justify-start" variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Create New Project
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Users className="mr-2 h-4 w-4" />
          Add Team Member
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </CardContent>
    </Card>
  )
}

