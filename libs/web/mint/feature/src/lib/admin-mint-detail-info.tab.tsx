import { useAdminFindOneMint } from '@tokengator-mint/web-mint-data-access'
import { MintUiInfo } from '@tokengator-mint/web-mint-ui'
import { UiCard, UiDebug, UiError, UiLoader } from '@pubkey-ui/core'

export function AdminMintDetailInfoTab({ mintId }: { mintId: string }) {
  const { item, query } = useAdminFindOneMint({ mintId })

  if (query.isLoading) {
    return <UiLoader />
  }
  if (!item) {
    return <UiError message="Mint not found." />
  }

  return (
    <UiCard>
      <MintUiInfo mint={item} />
    </UiCard>
  )
}
