import { toastError, UiBack, UiCard, UiPage } from '@pubkey-ui/core'
import { UserCreateProjectMemberInput } from '@tokengator/sdk'
import { useUserFindManyProjectMember } from '@tokengator/web-project-member-data-access'
import { UserProjectMemberUiCreateForm } from '@tokengator/web-project-member-ui'
import { useNavigate } from 'react-router-dom'

export function UserProjectMemberCreateFeature({ projectId }: { projectId: string }) {
  const navigate = useNavigate()
  const { createProjectMember } = useUserFindManyProjectMember({ projectId })

  async function submit(input: UserCreateProjectMemberInput) {
    return createProjectMember(input)
      .then((res) => {
        if (res) {
          navigate(`/projectMembers/${res?.id}`)
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
        <UserProjectMemberUiCreateForm submit={submit} />
      </UiCard>
    </UiPage>
  )
}
