import { AvatarProps, Group, type GroupProps, Stack, Text } from '@mantine/core'
import { UiAnchor, type UiAnchorProps } from '@pubkey-ui/core'
import { ProjectMember } from '@tokengator/sdk'
import { ProjectMemberUiAvatar } from './project-member-ui-avatar'

export function ProjectMemberUiItem({
  anchorProps,
  avatarProps,
  groupProps,
  projectMember,
  to,
}: {
  anchorProps?: UiAnchorProps
  avatarProps?: Omit<AvatarProps, 'src'>
  groupProps?: GroupProps
  projectMember?: ProjectMember
  to?: string | null
}) {
  if (!projectMember) return null

  return (
    <UiAnchor to={to ?? undefined} underline="never" {...anchorProps}>
      <Group gap="sm" {...groupProps}>
        <ProjectMemberUiAvatar projectMember={projectMember} {...avatarProps} />
        <Stack gap={1}>
          <Text size="sm" fw={500}>
            {projectMember?.role}
          </Text>
        </Stack>
      </Group>
    </UiAnchor>
  )
}
