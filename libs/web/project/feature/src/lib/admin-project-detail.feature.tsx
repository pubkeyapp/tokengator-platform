import { Group } from '@mantine/core'
import { UiBack, UiDebugModal, UiError, UiLoader, UiPage, UiTabRoutes } from '@pubkey-ui/core'
import { useAdminFindOneProject } from '@tokengator/web-project-data-access'
import { AdminProjectMemberFeature } from '@tokengator/web-project-member-feature'
import { useParams } from 'react-router-dom'
import { AdminProjectDetailOverviewTab } from './admin-project-detail-overview.tab'
import { AdminProjectDetailSettingsTab } from './admin-project-detail-settings.tab'

export function AdminProjectDetailFeature() {
  const { projectId } = useParams<{ projectId: string }>() as { projectId: string }
  const { item, query } = useAdminFindOneProject({ projectId })

  if (query.isLoading) {
    return <UiLoader />
  }
  if (!item) {
    return <UiError message="Project not found." />
  }

  return (
    <UiPage
      title={<Group>{item.name}</Group>}
      leftAction={<UiBack />}
      rightAction={
        <Group>
          <UiDebugModal data={item} />
        </Group>
      }
    >
      <UiTabRoutes
        tabs={[
          {
            path: 'overview',
            label: 'Overview',
            element: <AdminProjectDetailOverviewTab projectId={projectId} />,
          },
          { path: 'members', label: 'Members', element: <AdminProjectMemberFeature projectId={projectId} /> },
          {
            path: 'settings',
            label: 'Settings',
            element: <AdminProjectDetailSettingsTab projectId={projectId} />,
          },
        ]}
      />
    </UiPage>
  )
}
