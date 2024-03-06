import { UserUpdateProjectMemberInput } from '@tokengator/sdk'
import { useSdk } from '@tokengator/web-core-data-access'
import { toastError, toastSuccess } from '@pubkey-ui/core'
import { useQuery } from '@tanstack/react-query'

export function useUserFindOneProjectMember({ projectMemberId }: { projectMemberId: string }) {
  const sdk = useSdk()
  const query = useQuery({
    queryKey: ['user', 'find-one-project-member', projectMemberId],
    queryFn: () => sdk.userFindOneProjectMember({ projectMemberId }).then((res) => res.data),
    retry: 0,
  })
  const item = query.data?.item ?? undefined

  return {
    item,
    query,
    updateProjectMember: async (input: UserUpdateProjectMemberInput) =>
      sdk
        .userUpdateProjectMember({ projectMemberId, input })
        .then((res) => res.data)
        .then(async (res) => {
          if (res) {
            toastSuccess('ProjectMember updated')
            await query.refetch()
            return true
          }
          toastError('ProjectMember not updated')
          return false
        })
        .catch((err) => {
          toastError(err.message)
          return false
        }),
  }
}
