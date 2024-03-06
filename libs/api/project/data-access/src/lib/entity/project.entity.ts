import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Project {
  @Field()
  id!: string
  @Field({ nullable: true })
  createdAt?: Date
  @Field({ nullable: true })
  updatedAt?: Date
  @Field()
  name!: string
  @Field()
  slug!: string
  @Field({ nullable: true })
  avatarUrl?: string
}
