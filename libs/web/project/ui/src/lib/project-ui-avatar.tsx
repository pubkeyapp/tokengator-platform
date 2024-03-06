import { Project } from '@tokengator/sdk'
import { UiAvatar, UiAvatarProps } from '@tokengator/web-ui-core'

export type ProjectUiAvatarProps = UiAvatarProps & {
  project?: Project
}

export function ProjectUiAvatar({ project, ...props }: ProjectUiAvatarProps) {
  return <UiAvatar radius="xs" avatarUrl={project?.avatarUrl} name={project?.name} {...props} />
}
