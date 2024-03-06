import { useAdminFindOneProjectMember } from '@tokengator/web-project-member-data-access'
import { AdminProjectMemberUiUpdateForm } from '@tokengator/web-project-member-ui'
import { UiCard, UiError, UiLoader } from '@pubkey-ui/core'

export function AdminProjectMemberDetailSettingsTab({ projectMemberId }: { projectMemberId: string }) {
  const { item, query, updateProjectMember } = useAdminFindOneProjectMember({ projectMemberId })

  if (query.isLoading) {
    return <UiLoader />
  }
  if (!item) {
    return <UiError message="ProjectMember not found." />
  }

  return (
    <UiCard>
      <AdminProjectMemberUiUpdateForm projectMember={item} submit={updateProjectMember} />
    </UiCard>
  )
}
