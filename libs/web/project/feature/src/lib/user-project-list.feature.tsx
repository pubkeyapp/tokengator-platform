import { Button, Group } from '@mantine/core'
import { UiPageLimit, UiSearchField } from '@tokengator/web-ui-core'
import { useUserFindManyProject } from '@tokengator/web-project-data-access'
import { ProjectUiGrid } from '@tokengator/web-project-ui'
import { UiBack, UiDebugModal, UiInfo, UiLoader, UiPage } from '@pubkey-ui/core'
import { Link } from 'react-router-dom'

export function UserProjectListFeature() {
  const { deleteProject, items, pagination, query, setSearch } = useUserFindManyProject({
    limit: 12,
  })

  return (
    <UiPage
      title="Projects"
      leftAction={<UiBack />}
      rightAction={
        <Group>
          <UiDebugModal data={items} />
          <Button component={Link} to="create">
            Create
          </Button>
        </Group>
      }
    >
      <Group>
        <UiSearchField placeholder="Search project" setSearch={setSearch} />
      </Group>

      {query.isLoading ? (
        <UiLoader />
      ) : items?.length ? (
        <ProjectUiGrid
          projects={items}
          page={pagination.page}
          totalRecords={pagination.total}
          onPageChange={pagination.setPage}
          limit={pagination.limit}
          setLimit={pagination.setLimit}
          setPage={pagination.setPage}
        />
      ) : (
        <UiInfo message="No projects found" />
      )}
    </UiPage>
  )
}
