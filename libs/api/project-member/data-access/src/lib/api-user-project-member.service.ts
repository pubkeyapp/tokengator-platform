import { Injectable } from '@nestjs/common'
import { ApiCoreService } from '@tokengator/api-core-data-access'
import { UserCreateProjectMemberInput } from './dto/user-create-project-member.input'
import { UserFindManyProjectMemberInput } from './dto/user-find-many-project-member.input'
import { UserUpdateProjectMemberInput } from './dto/user-update-project-member.input'
import { ProjectMemberPaging } from './entity/project-member-paging.entity'
import { getUserProjectMemberWhereInput } from './helpers/get-user-project-member-where.input'

@Injectable()
export class ApiUserProjectMemberService {
  constructor(private readonly core: ApiCoreService) {}

  async createProjectMember(input: UserCreateProjectMemberInput) {
    return this.core.data.projectMember.create({ data: input })
  }

  async deleteProjectMember(projectMemberId: string) {
    const deleted = await this.core.data.projectMember.delete({ where: { id: projectMemberId } })
    return !!deleted
  }

  async findManyProjectMember(input: UserFindManyProjectMemberInput): Promise<ProjectMemberPaging> {
    return this.core.data.projectMember
      .paginate({
        orderBy: { createdAt: 'desc' },
        where: getUserProjectMemberWhereInput(input),
      })
      .withPages({ limit: input.limit, page: input.page })
      .then(([data, meta]) => ({ data, meta }))
  }

  async findOneProjectMember(projectMemberId: string) {
    return this.core.data.projectMember.findUnique({ where: { id: projectMemberId } })
  }

  async updateProjectMember(projectMemberId: string, input: UserUpdateProjectMemberInput) {
    return this.core.data.projectMember.update({ where: { id: projectMemberId }, data: input })
  }
}
