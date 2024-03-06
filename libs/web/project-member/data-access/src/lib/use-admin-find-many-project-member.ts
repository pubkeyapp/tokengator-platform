import { toastError, toastSuccess } from '@pubkey-ui/core'
import { useQuery } from '@tanstack/react-query'
import { AdminCreateProjectMemberInput, AdminFindManyProjectMemberInput } from '@tokengator/sdk'
import { useSdk } from '@tokengator/web-core-data-access'
import { useState } from 'react'

export function useAdminFindManyProjectMember(props: Partial<AdminFindManyProjectMemberInput> & { projectId: string }) {
  const sdk = useSdk()
  const [limit, setLimit] = useState(props?.limit ?? 10)
  const [page, setPage] = useState(props?.page ?? 1)
  const [search, setSearch] = useState<string>(props?.search ?? '')

  const input: AdminFindManyProjectMemberInput = { page, limit, search, projectId: props.projectId }
  const query = useQuery({
    queryKey: ['admin', 'find-many-project-member', input],
    queryFn: () => sdk.adminFindManyProjectMember({ input }).then((res) => res.data),
  })
  const total = query.data?.paging?.meta?.totalCount ?? 0
  const items = query.data?.paging.data ?? []

  return {
    items,
    query,
    pagination: {
      page,
      setPage,
      limit,
      setLimit,
      total,
    },
    setSearch,
    createProjectMember: (input: AdminCreateProjectMemberInput) =>
      sdk
        .adminCreateProjectMember({ input })
        .then((res) => res.data)
        .then((res) => {
          if (res.created) {
            toastSuccess(`ProjectMember created`)
          } else {
            toastError(`ProjectMember not created`)
          }
          return res.created
        })
        .catch((err) => {
          toastError(err.message)
          return undefined
        }),
    deleteProjectMember: (projectMemberId: string) =>
      sdk.adminDeleteProjectMember({ projectMemberId }).then(() => {
        toastSuccess('ProjectMember deleted')
        return query.refetch()
      }),
  }
}
