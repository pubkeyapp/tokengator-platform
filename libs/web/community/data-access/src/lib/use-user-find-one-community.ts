import { toastError, toastSuccess } from '@pubkey-ui/core'
import { useQuery } from '@tanstack/react-query'
import { Community, UserUpdateCommunityInput } from '@tokengator-mint/sdk'
import { useSdk } from '@tokengator-mint/web-core-data-access'
import { uiToastLink } from '@tokengator-mint/web-solana-data-access'

export function useUserFindOneCommunity({ slug }: { slug: string }) {
  const sdk = useSdk()
  const query = useQuery({
    queryKey: ['user', 'find-one-community', slug],
    queryFn: () => sdk.userFindOneCommunity({ slug }).then((res) => res.data),
    retry: 0,
  })
  const item: Community | undefined = query.data?.item ?? undefined

  return {
    item,
    query,
    createMinter: (presetId: string) =>
      sdk
        .userCreateMintFromPreset({ presetId, communityId: item?.id ?? '' })
        .then((res) => {
          if (res.data.minted) {
            toastSuccess('Minter created')
            uiToastLink({
              label: 'View Transaction',
              link: `tx/${res.data.minted}`,
            })
          }
          return res.data.minted
        })
        .catch((err) => {
          toastError(err.message)
          return false
        }),
    updateCommunity: async (input: UserUpdateCommunityInput) =>
      sdk
        .userUpdateCommunity({ communityId: item?.id ?? '', input })
        .then((res) => res.data)
        .then(async (res) => {
          if (res) {
            toastSuccess('Community updated')
            await query.refetch()
            return true
          }
          toastError('Community not updated')
          return false
        })
        .catch((err) => {
          toastError(err.message)
          return false
        }),
  }
}
