import { Field, ObjectType } from '@nestjs/graphql'
import { ProjectMemberRole } from './project-member-role.enum'

@ObjectType()
export class ProjectMember {
  @Field()
  id!: string
  @Field({ nullable: true })
  createdAt?: Date
  @Field({ nullable: true })
  updatedAt?: Date
  @Field()
  userId!: string
  @Field()
  projectId!: string
  @Field(() => ProjectMemberRole)
  role!: ProjectMemberRole
}
