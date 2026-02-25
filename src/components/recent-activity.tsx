import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { recentActivity } from '@/lib/mock-data'

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{activity.avatar}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.customer}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.email}
                </p>
              </div>
              <div className="ml-auto font-medium">{activity.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
