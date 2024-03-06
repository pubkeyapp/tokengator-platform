import { useUserFindOneProjectMember } from '@tokengator/web-project-member-data-access'
import { UiCard, UiDebug, UiError, UiLoader } from '@pubkey-ui/core'

export function UserProjectMemberDetailOverviewTab({ projectMemberId }: { projectMemberId: string }) {
  const { item, query } = useUserFindOneProjectMember({ projectMemberId })

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
