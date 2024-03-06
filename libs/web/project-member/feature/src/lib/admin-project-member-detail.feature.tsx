import { Group } from '@mantine/core'
import { UiBack, UiDebugModal, UiError, UiLoader, UiPage, UiTabRoutes } from '@pubkey-ui/core'
import { useAdminFindOneProjectMember } from '@tokengator/web-project-member-data-access'
import { useParams } from 'react-router-dom'
import { AdminProjectMemberDetailOverviewTab } from './admin-project-member-detail-overview.tab'
import { AdminProjectMemberDetailSettingsTab } from './admin-project-member-detail-settings.tab'

export function AdminProjectMemberDetailFeature() {
  const { projectMemberId } = useParams<{ projectMemberId: string }>() as { projectMemberId: string }
  const { item, query } = useAdminFindOneProjectMember({ projectMemberId })

  if (query.isLoading) {
    return <UiLoader />
  }
  if (!item) {
    return <UiError message="ProjectMember not found." />
  }

  return (
    <UiPage
      title={<Group>{item.role}</Group>}
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
            element: <AdminProjectMemberDetailOverviewTab projectMemberId={projectMemberId} />,
          },
          {
            path: 'settings',
            label: 'Settings',
            element: <AdminProjectMemberDetailSettingsTab projectMemberId={projectMemberId} />,
          },
        ]}
      />
    </UiPage>
  )
}
