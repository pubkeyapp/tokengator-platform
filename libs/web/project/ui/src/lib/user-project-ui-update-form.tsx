import { Button, Group } from '@mantine/core'
import { formFieldText, UiForm, UiFormField } from '@pubkey-ui/core'
import { Project, UserUpdateProjectInput } from '@tokengator/sdk'

export function UserProjectUiUpdateForm({
  submit,
  project,
}: {
  submit: (res: UserUpdateProjectInput) => Promise<boolean>
  project: Project
}) {
  const model: UserUpdateProjectInput = {
    name: project.name ?? '',
    slug: project.slug ?? '',
  }

  const fields: UiFormField<UserUpdateProjectInput>[] = [
    formFieldText('name', { label: 'Name' }),
    formFieldText('avatarUrl', { label: 'Avatar URL' }),
    formFieldText('slug', { label: 'Slug' }),
  ]
  return (
    <UiForm model={model} fields={fields} submit={(res) => submit(res as UserUpdateProjectInput)}>
      <Group justify="right">
        <Button type="submit">Save</Button>
      </Group>
    </UiForm>
  )
}
