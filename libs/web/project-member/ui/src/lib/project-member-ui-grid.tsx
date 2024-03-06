import { Group, Pagination, SimpleGrid } from '@mantine/core'
import { UiDebugModal, UiGroup, UiStack } from '@pubkey-ui/core'
import type { ProjectMember } from '@tokengator/sdk'
import { gridLimits, UiPageLimit } from '@tokengator/web-ui-core'
import { DataTableProps } from 'mantine-datatable'
import { ProjectMemberUiGridItem } from './project-member-ui-grid-item'

export function ProjectMemberUiGrid({
  projectMembers = [],
  onPageChange,
  page,
  totalRecords,
  limit,
  setLimit,
  setPage,
}: {
  projectMembers: ProjectMember[]
  page: DataTableProps['page']
  totalRecords: number
  onPageChange: (page: number) => void
  limit: number
  setLimit: (limit: number) => void
  setPage: (page: number) => void
}) {
  const totalPages = totalRecords / limit + 1
  return (
    <UiStack>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
        {projectMembers.map((projectMember) => (
          <ProjectMemberUiGridItem key={projectMember.id} to={projectMember.id} projectMember={projectMember} />
        ))}
      </SimpleGrid>
      <UiGroup>
        <Pagination disabled={totalPages < 2} total={totalPages} value={page} onChange={onPageChange} />
        <Group>
          <UiDebugModal data={projectMembers} />
          <UiPageLimit data={gridLimits} limit={limit} setLimit={setLimit} setPage={setPage} />
        </Group>
      </UiGroup>
    </UiStack>
  )
}
