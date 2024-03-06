import { UiDashboardItem } from '@pubkey-ui/core'
import { IconCube, IconSettings, IconUsers } from '@tabler/icons-react'
import { DashboardFeature } from '@tokengator/web-dashboard-feature'
import { UserProjectFeature } from '@tokengator/web-project-feature'
import { SettingsFeature } from '@tokengator/web-settings-feature'
import { SolanaFeature } from '@tokengator/web-solana-feature'
import { UserFeature } from '@tokengator/web-user-feature'
import { RouteObject, useRoutes } from 'react-router-dom'

const links: UiDashboardItem[] = [
  // User Dashboard Links are added by the web-crud generator
  { label: 'Projects', icon: IconCube, to: '/projects' },
  { label: 'Users', icon: IconUsers, to: '/u' },
  { label: 'Settings', icon: IconSettings, to: '/settings' },
]

const routes: RouteObject[] = [
  // User Dashboard Routes are added by the web-crud generator
  { path: '/dashboard', element: <DashboardFeature links={links} /> },
  { path: '/settings/*', element: <SettingsFeature /> },
  { path: '/solana/*', element: <SolanaFeature /> },
  { path: '/u/*', element: <UserFeature /> },
  { path: 'projects/*', element: <UserProjectFeature /> },
]

export default function ShellUserRoutes() {
  return useRoutes(routes)
}
