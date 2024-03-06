import { UserCreateProjectInput } from '@tokengator/sdk'
import { useUserFindManyProject } from '@tokengator/web-project-data-access'
import { UserProjectUiCreateForm } from '@tokengator/web-project-ui'
import { toastError, UiBack, UiCard, UiPage } from '@pubkey-ui/core'
import { useNavigate } from 'react-router-dom'

export function UserProjectCreateFeature() {
  const navigate = useNavigate()
  const { createProject } = useUserFindManyProject()

  async function submit(input: UserCreateProjectInput) {
    return createProject(input)
      .then((res) => {
        if (res) {
          navigate(`/projects/${res?.id}`)
        }
      })
      .then(() => true)
      .catch((err) => {
        toastError(err.message)
        return false
      })
  }

  return (
    <UiPage leftAction={<UiBack />} title="Create Project">
      <UiCard>
        <UserProjectUiCreateForm submit={submit} />
      </UiCard>
    </UiPage>
  )
}
