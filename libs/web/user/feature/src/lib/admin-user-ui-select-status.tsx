import { getEnumOptions, UserStatus } from '@tokengator/sdk'
import { UiSelectEnumOption } from '@tokengator/web-ui-core'

export function AdminUserUiSelectStatus({
  value,
  onChange,
}: {
  value: UserStatus | undefined
  onChange: (value: UserStatus | undefined) => void
}) {
  return (
    <UiSelectEnumOption<UserStatus>
      value={value}
      onChange={onChange}
      options={[{ value: '', label: 'Filter by status' }, ...getEnumOptions(UserStatus)]}
    />
  )
}
