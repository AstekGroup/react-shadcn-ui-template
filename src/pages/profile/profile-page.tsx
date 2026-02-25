import {
  Briefcase,
  Calendar,
  FileText,
  GitCommit,
  MapPin,
  MessageSquare,
  Star,
  User,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'

const stats = [
  { label: 'Projects', value: '12', icon: Briefcase },
  { label: 'Followers', value: '2.4k', icon: User },
  { label: 'Following', value: '186', icon: Star },
]

const activities = [
  {
    id: 1,
    icon: GitCommit,
    description: 'Pushed 3 commits to main branch',
    project: 'react-shadcn-ui',
    time: '2 hours ago',
  },
  {
    id: 2,
    icon: MessageSquare,
    description: 'Commented on issue #42',
    project: 'design-system',
    time: '5 hours ago',
  },
  {
    id: 3,
    icon: FileText,
    description: 'Created a new document',
    project: 'project-docs',
    time: '1 day ago',
  },
  {
    id: 4,
    icon: Star,
    description: 'Starred a repository',
    project: 'awesome-tools',
    time: '2 days ago',
  },
  {
    id: 5,
    icon: GitCommit,
    description: 'Merged pull request #28',
    project: 'react-shadcn-ui',
    time: '3 days ago',
  },
]

export function ProfilePage() {
  return (
    <PageShell>
      <PageHeader title="Profile" />

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <Avatar className="size-24">
              <AvatarImage src="" alt="John Doe" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-sm text-muted-foreground">
                Senior Software Engineer
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-1 text-sm text-muted-foreground sm:justify-start">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5" />
                  San Francisco, CA
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="size-3.5" />
                  Joined March 2023
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={activity.id}>
                <div className="flex items-start gap-3">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                    <activity.icon className="size-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">{activity.description}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{activity.project}</span>
                      <span>&middot;</span>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
                {index < activities.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  )
}
