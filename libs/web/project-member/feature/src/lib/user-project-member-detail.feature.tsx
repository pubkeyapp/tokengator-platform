import { Group } from '@mantine/core'
import { UiBack, UiDebugModal, UiError, UiLoader, UiPage, UiTabRoutes } from '@pubkey-ui/core'
import { useUserFindOneProjectMember } from '@tokengator/web-project-member-data-access'
import { useParams } from 'react-router-dom'
import { UserProjectMemberDetailOverviewTab } from './user-project-member-detail-overview.tab'
import { UserProjectMemberDetailSettingsTab } from './user-project-member-detail-settings.tab'

export function UserProjectMemberDetailFeature() {
  const { projectMemberId } = useParams<{ projectMemberId: string }>() as { projectMemberId: string }
  const { item, query } = useUserFindOneProjectMember({ projectMemberId })

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
            element: <UserProjectMemberDetailOverviewTab projectMemberId={projectMemberId} />,
          },
          {
            path: 'settings',
            label: 'Settings',
            element: <UserProjectMemberDetailSettingsTab projectMemberId={projectMemberId} />,
          },
        ]}
      />
    </UiPage>
  )
}
