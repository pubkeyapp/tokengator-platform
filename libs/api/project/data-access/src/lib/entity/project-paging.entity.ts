import { ObjectType } from '@nestjs/graphql'
import { PagingResponse } from '@tokengator/api-core-data-access'
import { Project } from './project.entity'

@ObjectType()
export class ProjectPaging extends PagingResponse<Project>(Project) {}
