import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ApiAuthGraphQLAdminGuard, CtxUserId } from '@tokengator/api-auth-data-access'
import {
  AdminCreateProjectInput,
  AdminFindManyProjectInput,
  AdminUpdateProjectInput,
  ApiProjectService,
  Project,
  ProjectPaging,
} from '@tokengator/api-project-data-access'

@Resolver()
@UseGuards(ApiAuthGraphQLAdminGuard)
export class ApiAdminProjectResolver {
  constructor(private readonly service: ApiProjectService) {}

  @Mutation(() => Project, { nullable: true })
  adminCreateProject(@CtxUserId() userId: string, @Args('input') input: AdminCreateProjectInput) {
    return this.service.admin.createProject(userId, input)
  }

  @Mutation(() => Boolean, { nullable: true })
  adminDeleteProject(@Args('projectId') projectId: string) {
    return this.service.admin.deleteProject(projectId)
  }

  @Query(() => ProjectPaging)
  adminFindManyProject(@Args('input') input: AdminFindManyProjectInput) {
    return this.service.admin.findManyProject(input)
  }

  @Query(() => Project, { nullable: true })
  adminFindOneProject(@Args('projectId') projectId: string) {
    return this.service.admin.findOneProject(projectId)
  }

  @Mutation(() => Project, { nullable: true })
  adminUpdateProject(@Args('projectId') projectId: string, @Args('input') input: AdminUpdateProjectInput) {
    return this.service.admin.updateProject(projectId, input)
  }
}
