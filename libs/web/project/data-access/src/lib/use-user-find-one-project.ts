import { toastError, toastSuccess } from '@pubkey-ui/core'
import { useQuery } from '@tanstack/react-query'
import { UserUpdateProjectInput } from '@tokengator/sdk'
import { useSdk } from '@tokengator/web-core-data-access'

export function useUserFindOneProject({ slug }: { slug: string }) {
  const sdk = useSdk()
  const query = useQuery({
    queryKey: ['user', 'find-one-project', slug],
    queryFn: () => sdk.userFindOneProject({ slug }).then((res) => res.data),
    retry: 0,
  })
  const item = query.data?.item ?? undefined

  return {
    item,
    query,
    updateProject: async (projectId: string, input: UserUpdateProjectInput) =>
      sdk
        .userUpdateProject({ projectId, input })
        .then((res) => res.data)
        .then(async (res) => {
          if (res) {
            toastSuccess('Project updated')
            await query.refetch()
            return true
          }
          toastError('Project not updated')
          return false
        })
        .catch((err) => {
          toastError(err.message)
          return false
        }),
  }
}
