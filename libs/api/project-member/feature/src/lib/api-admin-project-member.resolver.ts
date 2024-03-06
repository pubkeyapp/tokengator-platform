import { Resolver } from '@nestjs/graphql'
import { ApiProjectMemberService } from '@tokengator/api-project-member-data-access'
import { ApiAuthGraphQLAdminGuard } from '@tokengator/api-auth-data-access'
import { Mutation, Query, Args } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateProjectMemberInput,
  AdminFindManyProjectMemberInput,
  ProjectMember,
  ProjectMemberPaging,
  AdminUpdateProjectMemberInput,
} from '@tokengator/api-project-member-data-access'

@Resolver()
@UseGuards(ApiAuthGraphQLAdminGuard)
export class ApiAdminProjectMemberResolver {
  constructor(private readonly service: ApiProjectMemberService) {}

  @Mutation(() => ProjectMember, { nullable: true })
  adminCreateProjectMember(@Args('input') input: AdminCreateProjectMemberInput) {
    return this.service.admin.createProjectMember(input)
  }

  @Mutation(() => Boolean, { nullable: true })
  adminDeleteProjectMember(@Args('projectMemberId') projectMemberId: string) {
    return this.service.admin.deleteProjectMember(projectMemberId)
  }

  @Query(() => ProjectMemberPaging)
  adminFindManyProjectMember(@Args('input') input: AdminFindManyProjectMemberInput) {
    return this.service.admin.findManyProjectMember(input)
  }

  @Query(() => ProjectMember, { nullable: true })
  adminFindOneProjectMember(@Args('projectMemberId') projectMemberId: string) {
    return this.service.admin.findOneProjectMember(projectMemberId)
  }

  @Mutation(() => ProjectMember, { nullable: true })
  adminUpdateProjectMember(
    @Args('projectMemberId') projectMemberId: string,
    @Args('input') input: AdminUpdateProjectMemberInput,
  ) {
    return this.service.admin.updateProjectMember(projectMemberId, input)
  }
}
