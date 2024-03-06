import { Injectable } from '@nestjs/common'
import { ApiCoreService } from '@tokengator/api-core-data-access'
import { AdminCreateProjectMemberInput } from './dto/admin-create-project-member.input'
import { AdminFindManyProjectMemberInput } from './dto/admin-find-many-project-member.input'
import { AdminUpdateProjectMemberInput } from './dto/admin-update-project-member.input'
import { ProjectMemberPaging } from './entity/project-member-paging.entity'
import { getAdminProjectMemberWhereInput } from './helpers/get-admin-project-member-where.input'

@Injectable()
export class ApiAdminProjectMemberService {
  constructor(private readonly core: ApiCoreService) {}

  async createProjectMember(input: AdminCreateProjectMemberInput) {
    return this.core.data.projectMember.create({ data: input })
  }

  async deleteProjectMember(projectMemberId: string) {
    const deleted = await this.core.data.projectMember.delete({ where: { id: projectMemberId } })
    return !!deleted
  }

  async findManyProjectMember(input: AdminFindManyProjectMemberInput): Promise<ProjectMemberPaging> {
    return this.core.data.projectMember
      .paginate({
        orderBy: { createdAt: 'desc' },
        where: getAdminProjectMemberWhereInput(input),
      })
      .withPages({ limit: input.limit, page: input.page })
      .then(([data, meta]) => ({ data, meta }))
  }

  async findOneProjectMember(projectMemberId: string) {
    return this.core.data.projectMember.findUnique({ where: { id: projectMemberId } })
  }

  async updateProjectMember(projectMemberId: string, input: AdminUpdateProjectMemberInput) {
    return this.core.data.projectMember.update({ where: { id: projectMemberId }, data: input })
  }
}
