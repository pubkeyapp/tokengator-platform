import { Paper } from '@mantine/core'
import type { ProjectMember } from '@tokengator/sdk'
import { UiDebugModal, UiGroup } from '@pubkey-ui/core'
import { ProjectMemberUiItem } from './project-member-ui-item'

export function ProjectMemberUiGridItem({ projectMember, to }: { projectMember: ProjectMember; to?: string }) {
  return (
    <Paper withBorder p="md">
      <UiGroup>
        <ProjectMemberUiItem projectMember={projectMember} to={to} />
        <UiDebugModal data={projectMember} />
      </UiGroup>
    </Paper>
  )
}
