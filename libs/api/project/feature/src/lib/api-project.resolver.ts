import { Resolver } from '@nestjs/graphql'
import { ApiProjectService } from '@tokengator/api-project-data-access'
import { Project } from '@tokengator/api-project-data-access'

@Resolver(() => Project)
export class ApiProjectResolver {
  constructor(private readonly service: ApiProjectService) {}
}
