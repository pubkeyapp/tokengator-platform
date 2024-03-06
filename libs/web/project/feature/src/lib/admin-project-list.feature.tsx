import { Button, Group } from '@mantine/core'
import { UiPageLimit, UiSearchField } from '@tokengator/web-ui-core'
import { useAdminFindManyProject } from '@tokengator/web-project-data-access'
import { AdminProjectUiTable } from '@tokengator/web-project-ui'
import { UiBack, UiDebugModal, UiInfo, UiLoader, UiPage } from '@pubkey-ui/core'
import { Link } from 'react-router-dom'

export function AdminProjectListFeature() {
  const { deleteProject, items, pagination, query, setSearch } = useAdminFindManyProject({
    limit: 10,
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
        <UiPageLimit limit={pagination.limit} setLimit={pagination.setLimit} setPage={pagination.setPage} />
      </Group>

      {query.isLoading ? (
        <UiLoader />
      ) : items?.length ? (
        <AdminProjectUiTable
          deleteProject={(project) => {
            if (!window.confirm('Are you sure?')) return
            return deleteProject(project.id)
          }}
          projects={items}
          page={pagination.page}
          totalRecords={pagination.total}
          recordsPerPage={pagination.limit}
          onPageChange={(page) => void pagination.setPage(page)}
        />
      ) : (
        <UiInfo message="No projects found" />
      )}
    </UiPage>
  )
}
