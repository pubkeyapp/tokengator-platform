import { useUserFindOneProjectMember } from '@tokengator/web-project-member-data-access'
import { UserProjectMemberUiUpdateForm } from '@tokengator/web-project-member-ui'
import { UiCard, UiError, UiLoader } from '@pubkey-ui/core'

export function UserProjectMemberDetailSettingsTab({ projectMemberId }: { projectMemberId: string }) {
  const { item, query, updateProjectMember } = useUserFindOneProjectMember({ projectMemberId })

  if (query.isLoading) {
    return <UiLoader />
  }
  if (!item) {
    return <UiError message="ProjectMember not found." />
  }

  return (
    <UiCard>
      <UserProjectMemberUiUpdateForm projectMember={item} submit={updateProjectMember} />
    </UiCard>
  )
}
