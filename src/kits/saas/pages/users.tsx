import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'
import { Button } from '@/components/ui/button'
import { UserTable } from '@/kits/saas/components/user-table'
import { UserPlus } from 'lucide-react'

export function UsersPage() {
  return (
    <PageShell>
      <PageHeader
        title="Users"
        description="Manage your team members and their permissions"
      >
        <Button>
          <UserPlus className="size-4" />
          Invite User
        </Button>
      </PageHeader>
      <UserTable />
    </PageShell>
  )
}
