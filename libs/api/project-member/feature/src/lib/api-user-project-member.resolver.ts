import { Resolver } from '@nestjs/graphql'
import { ApiProjectMemberService } from '@tokengator/api-project-member-data-access'
import { ApiAuthGraphQLUserGuard } from '@tokengator/api-auth-data-access'
import { Mutation, Query, Args } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  UserCreateProjectMemberInput,
  UserFindManyProjectMemberInput,
  ProjectMember,
  ProjectMemberPaging,
  UserUpdateProjectMemberInput,
} from '@tokengator/api-project-member-data-access'

@Resolver()
@UseGuards(ApiAuthGraphQLUserGuard)
export class ApiUserProjectMemberResolver {
  constructor(private readonly service: ApiProjectMemberService) {}

  @Mutation(() => ProjectMember, { nullable: true })
  userCreateProjectMember(@Args('input') input: UserCreateProjectMemberInput) {
    return this.service.user.createProjectMember(input)
  }

  @Mutation(() => Boolean, { nullable: true })
  userDeleteProjectMember(@Args('projectMemberId') projectMemberId: string) {
    return this.service.user.deleteProjectMember(projectMemberId)
  }

  @Query(() => ProjectMemberPaging)
  userFindManyProjectMember(@Args('input') input: UserFindManyProjectMemberInput) {
    return this.service.user.findManyProjectMember(input)
  }

  @Query(() => ProjectMember, { nullable: true })
  userFindOneProjectMember(@Args('projectMemberId') projectMemberId: string) {
    return this.service.user.findOneProjectMember(projectMemberId)
  }

  @Mutation(() => ProjectMember, { nullable: true })
  userUpdateProjectMember(
    @Args('projectMemberId') projectMemberId: string,
    @Args('input') input: UserUpdateProjectMemberInput,
  ) {
    return this.service.user.updateProjectMember(projectMemberId, input)
  }
}
