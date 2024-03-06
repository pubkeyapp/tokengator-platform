import { Button, Group } from '@mantine/core'
import { formFieldSelect, UiForm, UiFormField } from '@pubkey-ui/core'
import { AdminCreateProjectMemberInput, getEnumOptions, ProjectMemberRole } from '@tokengator/sdk'

export function AdminProjectMemberUiCreateForm({
  submit,
}: {
  submit: (res: AdminCreateProjectMemberInput) => Promise<boolean>
}) {
  const model: AdminCreateProjectMemberInput = {
    role: ProjectMemberRole.Member,
    projectId: '',
    userId: '',
  }

  const fields: UiFormField<AdminCreateProjectMemberInput>[] = [
    formFieldSelect('role', { label: 'Role', options: getEnumOptions(ProjectMemberRole) }),
  ]
  return (
    <UiForm model={model} fields={fields} submit={(res) => submit(res as AdminCreateProjectMemberInput)}>
      <Group justify="right">
        <Button type="submit">Create</Button>
      </Group>
    </UiForm>
  )
}
