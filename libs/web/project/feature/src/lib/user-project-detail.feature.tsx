import { Group } from '@mantine/core'
import { UiBack, UiDebugModal, UiError, UiLoader, UiPage, UiTabRoutes } from '@pubkey-ui/core'
import { useUserFindOneProject } from '@tokengator/web-project-data-access'
import { UserProjectMemberFeature } from '@tokengator/web-project-member-feature'
import { useParams } from 'react-router-dom'
import { UserProjectDetailOverviewTab } from './user-project-detail-overview.tab'
import { UserProjectDetailSettingsTab } from './user-project-detail-settings.tab'

export function UserProjectDetailFeature() {
  const { slug } = useParams<{ slug: string }>() as { slug: string }
  const { item, query } = useUserFindOneProject({ slug })

  if (query.isLoading) {
    return <UiLoader />
  }
  if (!item) {
    return <UiError message="Project not found." />
  }
  const projectId = item.id

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
            element: <UserProjectDetailOverviewTab slug={slug} />,
          },
          { path: 'members', label: 'Members', element: <UserProjectMemberFeature projectId={projectId} /> },
          {
            path: 'settings',
            label: 'Settings',
            element: <UserProjectDetailSettingsTab slug={slug} />,
          },
        ]}
      />
    </UiPage>
  )
}
