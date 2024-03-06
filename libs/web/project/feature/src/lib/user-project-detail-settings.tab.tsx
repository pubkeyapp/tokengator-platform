import { UiCard, UiError, UiLoader } from '@pubkey-ui/core'
import { useUserFindOneProject } from '@tokengator/web-project-data-access'
import { UserProjectUiUpdateForm } from '@tokengator/web-project-ui'

export function UserProjectDetailSettingsTab({ slug }: { slug: string }) {
  const { item, query, updateProject } = useUserFindOneProject({ slug })

  if (query.isLoading) {
    return <UiLoader />
  }
  if (!item) {
    return <UiError message="Project not found." />
  }

  const projectId = item.id
  return (
    <UiCard>
      <UserProjectUiUpdateForm project={item} submit={(input) => updateProject(projectId, input)} />
    </UiCard>
  )
}
