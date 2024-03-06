import { Button, Group } from '@mantine/core'
import { formFieldText, UiForm, UiFormField } from '@pubkey-ui/core'
import { AdminCreateProjectInput } from '@tokengator/sdk'

export function AdminProjectUiCreateForm({ submit }: { submit: (res: AdminCreateProjectInput) => Promise<boolean> }) {
  const model: AdminCreateProjectInput = {
    name: '',
  }

  const fields: UiFormField<AdminCreateProjectInput>[] = [formFieldText('name', { label: 'name', required: true })]
  return (
    <UiForm model={model} fields={fields} submit={(res) => submit(res as AdminCreateProjectInput)}>
      <Group justify="right">
        <Button type="submit">Create</Button>
      </Group>
    </UiForm>
  )
}
