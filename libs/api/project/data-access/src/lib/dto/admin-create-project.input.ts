import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateProjectInput {
  @Field()
  name!: string
}
