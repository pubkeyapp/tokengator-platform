import { Field, InputType } from '@nestjs/graphql'
import { ProjectMemberRole } from '../entity/project-member-role.enum'

@InputType()
export class UserUpdateProjectMemberInput {
  @Field(() => ProjectMemberRole, { nullable: true })
  role?: ProjectMemberRole
}
