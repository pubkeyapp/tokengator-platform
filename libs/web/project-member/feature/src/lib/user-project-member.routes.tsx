import { useRoutes } from 'react-router-dom'
import { UserProjectMemberCreateFeature } from './user-project-member-create.feature'
import { UserProjectMemberDetailFeature } from './user-project-member-detail.feature'
import { UserProjectMemberListFeature } from './user-project-member-list.feature'

export default function UserProjectMemberRoutes({ projectId }: { projectId: string }) {
  return useRoutes([
    { path: '', element: <UserProjectMemberListFeature projectId={projectId} /> },
    {
      path: 'create',
      element: <UserProjectMemberCreateFeature projectId={projectId} />,
    },
    { path: ':projectMemberId/*', element: <UserProjectMemberDetailFeature /> },
  ])
}
