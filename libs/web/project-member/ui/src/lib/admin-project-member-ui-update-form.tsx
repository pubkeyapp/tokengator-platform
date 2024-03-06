import { Button, Group } from '@mantine/core'
import { formFieldSelect, UiForm, UiFormField } from '@pubkey-ui/core'
import { AdminUpdateProjectMemberInput, getEnumOptions, ProjectMember, ProjectMemberRole } from '@tokengator/sdk'

export function AdminProjectMemberUiUpdateForm({
  submit,
  projectMember,
}: {
  submit: (res: AdminUpdateProjectMemberInput) => Promise<boolean>
  projectMember: ProjectMember
}) {
  const model: AdminUpdateProjectMemberInput = {
    role: projectMember.role,
  }

  const fields: UiFormField<AdminUpdateProjectMemberInput>[] = [
    formFieldSelect('role', { label: 'Role', options: getEnumOptions(ProjectMemberRole) }),
  ]
  return (
    <UiForm model={model} fields={fields} submit={(res) => submit(res as AdminUpdateProjectMemberInput)}>
      <Group justify="right">
        <Button type="submit">Save</Button>
      </Group>
    </UiForm>
  )
}
