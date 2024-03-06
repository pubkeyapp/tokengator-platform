import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateProjectInput {
  @Field({ nullable: true })
  name?: string
  @Field({ nullable: true })
  slug?: string
  @Field({ nullable: true })
  avatarUrl?: string
}
