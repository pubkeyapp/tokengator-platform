import { Button, Group } from '@mantine/core'
import { formFieldText, UiForm, UiFormField } from '@pubkey-ui/core'
import { UserCreateProjectInput } from '@tokengator/sdk'

export function UserProjectUiCreateForm({ submit }: { submit: (res: UserCreateProjectInput) => Promise<boolean> }) {
  const model: UserCreateProjectInput = {
    name: '',
  }

  const fields: UiFormField<UserCreateProjectInput>[] = [formFieldText('name', { label: 'name', required: true })]
  return (
    <UiForm model={model} fields={fields} submit={(res) => submit(res as UserCreateProjectInput)}>
      <Group justify="right">
        <Button type="submit">Create</Button>
      </Group>
    </UiForm>
  )
}
