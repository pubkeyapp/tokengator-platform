import { Field, InputType } from '@nestjs/graphql'
import { PagingInput } from '@tokengator-mint/api-core-data-access'

@InputType()
export class UserFindManyMintInput extends PagingInput() {
  @Field()
  communityId!: string
  @Field({ nullable: true })
  search?: string
}
