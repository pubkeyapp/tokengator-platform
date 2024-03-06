import { Group, Pagination, SimpleGrid } from '@mantine/core'
import { UiDebugModal, UiGroup, UiStack } from '@pubkey-ui/core'
import type { Project } from '@tokengator/sdk'
import { gridLimits, UiPageLimit } from '@tokengator/web-ui-core'
import { DataTableProps } from 'mantine-datatable'
import { ProjectUiGridItem } from './project-ui-grid-item'

export function ProjectUiGrid({
  projects = [],
  onPageChange,
  page,
  totalRecords,
  limit,
  setLimit,
  setPage,
}: {
  projects: Project[]
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
        {projects.map((project) => (
          <ProjectUiGridItem key={project.id} to={project.slug} project={project} />
        ))}
      </SimpleGrid>
      <UiGroup>
        <Pagination disabled={totalPages < 2} total={totalPages} value={page} onChange={onPageChange} />
        <Group>
          <UiDebugModal data={projects} />
          <UiPageLimit data={gridLimits} limit={limit} setLimit={setLimit} setPage={setPage} />
        </Group>
      </UiGroup>
    </UiStack>
  )
}
