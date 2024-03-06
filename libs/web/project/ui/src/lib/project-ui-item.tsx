import { AvatarProps, Group, type GroupProps, Stack, Text } from '@mantine/core'
import { UiAnchor, type UiAnchorProps } from '@pubkey-ui/core'
import { Project } from '@tokengator/sdk'
import { ProjectUiAvatar } from './project-ui-avatar'

export function ProjectUiItem({
  anchorProps,
  avatarProps,
  groupProps,
  project,
  to,
}: {
  anchorProps?: UiAnchorProps
  avatarProps?: Omit<AvatarProps, 'src'>
  groupProps?: GroupProps
  project?: Project
  to?: string | null
}) {
  if (!project) return null

  return (
    <UiAnchor to={to ?? undefined} underline="never" {...anchorProps}>
      <Group gap="sm" {...groupProps}>
        <ProjectUiAvatar project={project} {...avatarProps} />
        <Stack gap={1}>
          <Text size="lg" fw={500}>
            {project?.name}
          </Text>
        </Stack>
      </Group>
    </UiAnchor>
  )
}
