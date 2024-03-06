import { ProjectMember } from '@tokengator/sdk'
import { UiAvatar, UiAvatarProps } from '@tokengator/web-ui-core'

export type ProjectMemberUiAvatarProps = UiAvatarProps & {
  projectMember?: ProjectMember
}

export function ProjectMemberUiAvatar({ projectMember, ...props }: ProjectMemberUiAvatarProps) {
  return <UiAvatar avatarUrl={undefined} name={projectMember?.role} {...props} />
}
