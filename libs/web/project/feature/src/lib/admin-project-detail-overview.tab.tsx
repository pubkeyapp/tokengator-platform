import { useAdminFindOneProject } from '@tokengator/web-project-data-access'
import { UiCard, UiDebug, UiError, UiLoader } from '@pubkey-ui/core'

export function AdminProjectDetailOverviewTab({ projectId }: { projectId: string }) {
  const { item, query } = useAdminFindOneProject({ projectId })

  if (query.isLoading) {
    return <UiLoader />
  }
  if (!item) {
    return <UiError message="Project not found." />
  }

  return (
    <UiCard>
      <UiDebug data={item} open />
    </UiCard>
  )
}
