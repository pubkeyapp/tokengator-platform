import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateMintInput {
  @Field()
  name!: string
  @Field()
  symbol!: string
  @Field({ nullable: true })
  decimals?: number
  @Field({ nullable: true })
  imageUrl?: string
  @Field(() => String, { nullable: true })
  secretKey?: string
}
