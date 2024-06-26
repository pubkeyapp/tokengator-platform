import { Text, Timeline } from '@mantine/core'
import { UiAnchor, UiTime } from '@pubkey-ui/core'
import { IconCheck } from '@tabler/icons-react'
import { TokenGatorActivity, TokenGatorActivityEntry } from '@tokengator/sdk'
import { AssetActivityUiPoints } from './asset-activity-ui-points'

export function AssetActivityUiEntryList({
  activity,
  entries,
}: {
  activity: TokenGatorActivity
  entries: TokenGatorActivityEntry[]
}) {
  return (
    <Timeline active={entries.length} bulletSize={24} lineWidth={2}>
      {entries.reverse().map((entry) => (
        <Timeline.Item
          key={entry.timestamp?.toString()}
          bullet={<IconCheck size={12} />}
          title={
            <UiAnchor target="_blank" to={entry.url ?? undefined}>
              {entry.message}
            </UiAnchor>
          }
        >
          {(entry?.points ?? 0) > 0 ? (
            <Text c="dimmed" size="sm" span>
              Earned <AssetActivityUiPoints activity={activity} entry={entry} />
            </Text>
          ) : null}
          <UiTime date={new Date(entry.timestamp)} size="xs" mt={4} />
        </Timeline.Item>
      ))}
    </Timeline>
  )
}
