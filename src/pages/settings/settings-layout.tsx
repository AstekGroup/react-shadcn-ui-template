import { Outlet, useLocation, useNavigate } from 'react-router'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'

const tabs = [
  { value: 'general', label: 'General', path: '.' },
  { value: 'profile', label: 'Profile', path: 'profile' },
  { value: 'notifications', label: 'Notifications', path: 'notifications' },
]

function getActiveTab(pathname: string): string {
  if (pathname.endsWith('/notifications')) return 'notifications'
  if (pathname.endsWith('/profile')) return 'profile'
  return 'general'
}

export function SettingsLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const activeTab = getActiveTab(location.pathname)

  function handleTabChange(value: string) {
    const tab = tabs.find((t) => t.value === value)
    if (tab) {
      navigate(tab.path)
    }
  }

  return (
    <PageShell>
      <PageHeader
        title="Settings"
        description="Manage your account settings and preferences."
      />
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Outlet />
    </PageShell>
  )
}
