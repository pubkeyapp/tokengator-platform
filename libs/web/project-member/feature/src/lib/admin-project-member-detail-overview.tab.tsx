import { useAdminFindOneProjectMember } from '@tokengator/web-project-member-data-access'
import { UiCard, UiDebug, UiError, UiLoader } from '@pubkey-ui/core'

export function AdminProjectMemberDetailOverviewTab({ projectMemberId }: { projectMemberId: string }) {
  const { item, query } = useAdminFindOneProjectMember({ projectMemberId })

  if (query.isLoading) {
    return <UiLoader />
  }
  if (!item) {
    return <UiError message="ProjectMember not found." />
  }

  return (
    <UiCard>
      <UiDebug data={item} open />
    </UiCard>
  )
}
