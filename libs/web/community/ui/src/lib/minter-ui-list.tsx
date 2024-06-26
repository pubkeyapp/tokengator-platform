import { ActionIcon, Group, SimpleGrid, Text, Tooltip } from '@mantine/core'
import { toastError, toastSuccess } from '@pubkey-ui/core'
import { IconTrash } from '@tabler/icons-react'
import { TokenGatorMinter } from '@tokengator/sdk'

import { MinterUiCard } from './minter-ui-card'

export function MinterUiList({
  items,
  deleteMinter,
}: {
  items: TokenGatorMinter[]
  deleteMinter: (account: string) => Promise<void>
}) {
  return (
    <SimpleGrid cols={{ base: 1, md: 2 }}>
      {items.map((item, index) => (
        <MinterUiCard key={index} item={item}>
          <Text c="dimmed">{item.description}</Text>

          <Group justify="flex-end">
            <Tooltip label={'Delete minter'}>
              <ActionIcon
                color="red"
                variant="light"
                size="sm"
                onClick={() => {
                  if (!window.confirm('Are you sure you want to delete this minter?')) return
                  deleteMinter(item.publicKey)
                    .then(() => {
                      toastSuccess('Minter deleted')
                    })
                    .catch((err) => {
                      toastError(err.message)
                    })
                }}
              >
                <IconTrash size={16} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </MinterUiCard>
      ))}
    </SimpleGrid>
  )
}
