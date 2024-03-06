import { ObjectType } from '@nestjs/graphql'
import { PagingResponse } from '@tokengator/api-core-data-access'
import { ProjectMember } from './project-member.entity'

@ObjectType()
export class ProjectMemberPaging extends PagingResponse<ProjectMember>(ProjectMember) {}
