import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateProjectInput {
  @Field()
  name!: string
}
