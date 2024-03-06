import { useAdminFindOneProject } from '@tokengator/web-project-data-access'
import { AdminProjectUiUpdateForm } from '@tokengator/web-project-ui'
import { UiCard, UiError, UiLoader } from '@pubkey-ui/core'

export function AdminProjectDetailSettingsTab({ projectId }: { projectId: string }) {
  const { item, query, updateProject } = useAdminFindOneProject({ projectId })

  if (query.isLoading) {
    return <UiLoader />
  }
  if (!item) {
    return <UiError message="Project not found." />
  }

  return (
    <UiCard>
      <AdminProjectUiUpdateForm project={item} submit={updateProject} />
    </UiCard>
  )
}
