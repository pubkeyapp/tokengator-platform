import { toastError, toastSuccess } from '@pubkey-ui/core'
import { useQuery } from '@tanstack/react-query'
import { UserCreateProjectMemberInput, UserFindManyProjectMemberInput } from '@tokengator/sdk'
import { useSdk } from '@tokengator/web-core-data-access'
import { useState } from 'react'

export function useUserFindManyProjectMember(props: Partial<UserFindManyProjectMemberInput> & { projectId: string }) {
  const sdk = useSdk()
  const [limit, setLimit] = useState(props?.limit ?? 10)
  const [page, setPage] = useState(props?.page ?? 1)
  const [search, setSearch] = useState<string>(props?.search ?? '')

  const input: UserFindManyProjectMemberInput = { page, limit, search, projectId: props.projectId }
  const query = useQuery({
    queryKey: ['user', 'find-many-project-member', input],
    queryFn: () => sdk.userFindManyProjectMember({ input }).then((res) => res.data),
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
    createProjectMember: (input: UserCreateProjectMemberInput) =>
      sdk
        .userCreateProjectMember({ input })
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
      sdk.userDeleteProjectMember({ projectMemberId }).then(() => {
        toastSuccess('ProjectMember deleted')
        return query.refetch()
      }),
  }
}
