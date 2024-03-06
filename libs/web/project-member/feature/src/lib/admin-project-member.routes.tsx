import { useRoutes } from 'react-router-dom'
import { AdminProjectMemberCreateFeature } from './admin-project-member-create.feature'
import { AdminProjectMemberDetailFeature } from './admin-project-member-detail.feature'
import { AdminProjectMemberListFeature } from './admin-project-member-list.feature'

export default function AdminProjectMemberRoutes({ projectId }: { projectId: string }) {
  return useRoutes([
    { path: '', element: <AdminProjectMemberListFeature projectId={projectId} /> },
    {
      path: 'create',
      element: <AdminProjectMemberCreateFeature projectId={projectId} />,
    },
    { path: ':projectMemberId/*', element: <AdminProjectMemberDetailFeature /> },
  ])
}
