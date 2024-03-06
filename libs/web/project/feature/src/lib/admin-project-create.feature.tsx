import { AdminCreateProjectInput } from '@tokengator/sdk'
import { useAdminFindManyProject } from '@tokengator/web-project-data-access'
import { AdminProjectUiCreateForm } from '@tokengator/web-project-ui'
import { toastError, UiBack, UiCard, UiPage } from '@pubkey-ui/core'
import { useNavigate } from 'react-router-dom'

export function AdminProjectCreateFeature() {
  const navigate = useNavigate()
  const { createProject } = useAdminFindManyProject()

  async function submit(input: AdminCreateProjectInput) {
    return createProject(input)
      .then((res) => {
        if (res) {
          navigate(`/admin/projects/${res?.id}`)
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
        <AdminProjectUiCreateForm submit={submit} />
      </UiCard>
    </UiPage>
  )
}
