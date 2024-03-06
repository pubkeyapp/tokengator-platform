import { UiCard, UiDebug, UiError, UiLoader } from '@pubkey-ui/core'
import { useUserFindOneProject } from '@tokengator/web-project-data-access'

export function UserProjectDetailOverviewTab({ slug }: { slug: string }) {
  const { item, query } = useUserFindOneProject({ slug })

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
