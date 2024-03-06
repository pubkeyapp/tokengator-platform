import { Button, Group } from '@mantine/core'
import { formFieldText, UiForm, UiFormField } from '@pubkey-ui/core'
import { AdminUpdateProjectInput, Project } from '@tokengator/sdk'

export function AdminProjectUiUpdateForm({
  submit,
  project,
}: {
  submit: (res: AdminUpdateProjectInput) => Promise<boolean>
  project: Project
}) {
  const model: AdminUpdateProjectInput = {
    name: project.name ?? '',
    slug: project.slug ?? '',
  }

  const fields: UiFormField<AdminUpdateProjectInput>[] = [
    formFieldText('name', { label: 'Name' }),
    formFieldText('avatarUrl', { label: 'Avatar URL' }),
    formFieldText('slug', { label: 'Slug' }),
  ]
  return (
    <UiForm model={model} fields={fields} submit={(res) => submit(res as AdminUpdateProjectInput)}>
      <Group justify="right">
        <Button type="submit">Save</Button>
      </Group>
    </UiForm>
  )
}
