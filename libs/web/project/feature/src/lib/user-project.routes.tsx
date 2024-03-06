import { useRoutes } from 'react-router-dom'
import { UserProjectCreateFeature } from './user-project-create.feature'
import { UserProjectDetailFeature } from './user-project-detail.feature'
import { UserProjectListFeature } from './user-project-list.feature'

export default function UserProjectRoutes() {
  return useRoutes([
    { path: '', element: <UserProjectListFeature /> },
    {
      path: 'create',
      element: <UserProjectCreateFeature />,
    },
    { path: ':slug/*', element: <UserProjectDetailFeature /> },
  ])
}
