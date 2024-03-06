import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ApiAuthGraphQLUserGuard, CtxUserId } from '@tokengator/api-auth-data-access'
import {
  ApiProjectService,
  Project,
  ProjectPaging,
  UserCreateProjectInput,
  UserFindManyProjectInput,
  UserUpdateProjectInput,
} from '@tokengator/api-project-data-access'

@Resolver()
@UseGuards(ApiAuthGraphQLUserGuard)
export class ApiUserProjectResolver {
  constructor(private readonly service: ApiProjectService) {}

  @Mutation(() => Project, { nullable: true })
  userCreateProject(@CtxUserId() userId: string, @Args('input') input: UserCreateProjectInput) {
    return this.service.user.createProject(userId, input)
  }

  @Mutation(() => Boolean, { nullable: true })
  userDeleteProject(@Args('projectId') projectId: string) {
    return this.service.user.deleteProject(projectId)
  }

  @Query(() => ProjectPaging)
  userFindManyProject(@Args('input') input: UserFindManyProjectInput) {
    return this.service.user.findManyProject(input)
  }

  @Query(() => Project, { nullable: true })
  userFindOneProject(@Args('slug') slug: string) {
    return this.service.user.findOneProject(slug)
  }

  @Mutation(() => Project, { nullable: true })
  userUpdateProject(@Args('projectId') projectId: string, @Args('input') input: UserUpdateProjectInput) {
    return this.service.user.updateProject(projectId, input)
  }
}
