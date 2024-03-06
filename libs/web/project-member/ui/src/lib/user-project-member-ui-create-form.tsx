import { Button, Group } from '@mantine/core'
import { formFieldSelect, UiForm, UiFormField } from '@pubkey-ui/core'
import { getEnumOptions, ProjectMemberRole, UserCreateProjectMemberInput } from '@tokengator/sdk'

export function UserProjectMemberUiCreateForm({
  submit,
}: {
  submit: (res: UserCreateProjectMemberInput) => Promise<boolean>
}) {
  const model: UserCreateProjectMemberInput = {
    role: ProjectMemberRole.Member,
    projectId: '',
    userId: '',
  }

  const fields: UiFormField<UserCreateProjectMemberInput>[] = [
    formFieldSelect('role', { label: 'Role', options: getEnumOptions(ProjectMemberRole) }),
  ]
  return (
    <UiForm model={model} fields={fields} submit={(res) => submit(res as UserCreateProjectMemberInput)}>
      <Group justify="right">
        <Button type="submit">Create</Button>
      </Group>
    </UiForm>
  )
}
