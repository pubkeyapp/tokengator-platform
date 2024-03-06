import { Paper } from '@mantine/core'
import type { Project } from '@tokengator/sdk'
import { UiDebugModal, UiGroup } from '@pubkey-ui/core'
import { ProjectUiItem } from './project-ui-item'

export function ProjectUiGridItem({ project, to }: { project: Project; to?: string }) {
  return (
    <Paper withBorder p="md">
      <UiGroup>
        <ProjectUiItem project={project} to={to} />
        <UiDebugModal data={project} />
      </UiGroup>
    </Paper>
  )
}
