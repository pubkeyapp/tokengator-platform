import { toastError, UiBack, UiCard, UiPage } from '@pubkey-ui/core'
import { AdminCreateProjectMemberInput } from '@tokengator/sdk'
import { useAdminFindManyProjectMember } from '@tokengator/web-project-member-data-access'
import { AdminProjectMemberUiCreateForm } from '@tokengator/web-project-member-ui'
import { useNavigate } from 'react-router-dom'

export function AdminProjectMemberCreateFeature({ projectId }: { projectId: string }) {
  const navigate = useNavigate()
  const { createProjectMember } = useAdminFindManyProjectMember({ projectId })

  async function submit(input: AdminCreateProjectMemberInput) {
    return createProjectMember(input)
      .then((res) => {
        if (res) {
          navigate(`/admin/projectMembers/${res?.id}`)
        }
      })
      .then(() => true)
      .catch((err) => {
        toastError(err.message)
        return false
      })
  }

  return (
    <UiPage leftAction={<UiBack />} title="Create ProjectMember">
      <UiCard>
        <AdminProjectMemberUiCreateForm submit={submit} />
      </UiCard>
    </UiPage>
  )
}
