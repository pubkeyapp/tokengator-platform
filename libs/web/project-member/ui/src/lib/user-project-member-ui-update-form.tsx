import { Button, Group } from '@mantine/core'
import { formFieldSelect, UiForm, UiFormField } from '@pubkey-ui/core'
import { getEnumOptions, ProjectMember, ProjectMemberRole, UserUpdateProjectMemberInput } from '@tokengator/sdk'

export function UserProjectMemberUiUpdateForm({
  submit,
  projectMember,
}: {
  submit: (res: UserUpdateProjectMemberInput) => Promise<boolean>
  projectMember: ProjectMember
}) {
  const model: UserUpdateProjectMemberInput = {
    role: projectMember.role,
  }

  const fields: UiFormField<UserUpdateProjectMemberInput>[] = [
    formFieldSelect('role', { label: 'Role', options: getEnumOptions(ProjectMemberRole) }),
  ]
  return (
    <UiForm model={model} fields={fields} submit={(res) => submit(res as UserUpdateProjectMemberInput)}>
      <Group justify="right">
        <Button type="submit">Save</Button>
      </Group>
    </UiForm>
  )
}
