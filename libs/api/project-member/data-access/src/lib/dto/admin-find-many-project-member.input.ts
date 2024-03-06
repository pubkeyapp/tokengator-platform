import { Field, InputType } from '@nestjs/graphql'
import { PagingInput } from '@tokengator/api-core-data-access'

@InputType()
export class AdminFindManyProjectMemberInput extends PagingInput() {
  @Field()
  projectId!: string
  @Field({ nullable: true })
  search?: string
}
