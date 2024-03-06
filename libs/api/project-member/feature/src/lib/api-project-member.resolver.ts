import { Resolver } from '@nestjs/graphql'
import { ApiProjectMemberService } from '@tokengator/api-project-member-data-access'
import { ProjectMember } from '@tokengator/api-project-member-data-access'

@Resolver(() => ProjectMember)
export class ApiProjectMemberResolver {
  constructor(private readonly service: ApiProjectMemberService) {}
}
