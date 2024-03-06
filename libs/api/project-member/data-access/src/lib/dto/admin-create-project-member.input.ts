import { Field, InputType } from '@nestjs/graphql'
import { ProjectMemberRole } from '../entity/project-member-role.enum'

@InputType()
export class AdminCreateProjectMemberInput {
  @Field()
  projectId!: string
  @Field()
  userId!: string
  @Field(() => ProjectMemberRole)
  role!: ProjectMemberRole
}
