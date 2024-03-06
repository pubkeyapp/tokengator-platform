import { Button, Group } from '@mantine/core'
import { UiDebugModal, UiInfo, UiLoader, UiStack } from '@pubkey-ui/core'
import { useUserFindManyProjectMember } from '@tokengator/web-project-member-data-access'
import { UserProjectMemberUiTable } from '@tokengator/web-project-member-ui'
import { UiSearchField } from '@tokengator/web-ui-core'
import { Link } from 'react-router-dom'

export function UserProjectMemberListFeature({ projectId }: { projectId: string }) {
  const { deleteProjectMember, items, pagination, query, setSearch } = useUserFindManyProjectMember({
    limit: 12,
    projectId,
  })

  return (
    <UiStack>
      <Group>
        <UiSearchField placeholder="Search member" setSearch={setSearch} />

        <UiDebugModal data={items} />
        <Button component={Link} to="create">
          Create
        </Button>
      </Group>

      {query.isLoading ? (
        <UiLoader />
      ) : items?.length ? (
        <UserProjectMemberUiTable
          deleteProjectMember={(projectMember) => {
            if (!window.confirm('Are you sure?')) return
            return deleteProjectMember(projectMember.id)
          }}
          projectMembers={items}
          page={pagination.page}
          totalRecords={pagination.total}
          recordsPerPage={pagination.limit}
          onPageChange={(page) => void pagination.setPage(page)}
        />
      ) : (
        <UiInfo message="No members found" />
      )}
    </UiStack>
  )
}
