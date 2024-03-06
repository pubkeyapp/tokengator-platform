import { Injectable } from '@nestjs/common'
import { ProjectMemberRole } from '@prisma/client'
import { ApiCoreService, slugifyId } from '@tokengator/api-core-data-access'
import { AdminCreateProjectInput } from './dto/admin-create-project.input'
import { AdminFindManyProjectInput } from './dto/admin-find-many-project.input'
import { AdminUpdateProjectInput } from './dto/admin-update-project.input'
import { ProjectPaging } from './entity/project-paging.entity'
import { getAdminProjectWhereInput } from './helpers/get-admin-project-where.input'

@Injectable()
export class ApiAdminProjectService {
  constructor(private readonly core: ApiCoreService) {}

  async createProject(userId: string, input: AdminCreateProjectInput) {
    return this.core.data.project.create({
      data: {
        ...input,
        slug: slugifyId(input.name),
        members: {
          create: { userId, role: ProjectMemberRole.Admin },
        },
      },
    })
  }

  async deleteProject(projectId: string) {
    const deleted = await this.core.data.project.delete({ where: { id: projectId } })
    return !!deleted
  }

  async findManyProject(input: AdminFindManyProjectInput): Promise<ProjectPaging> {
    return this.core.data.project
      .paginate({
        orderBy: { createdAt: 'desc' },
        where: getAdminProjectWhereInput(input),
      })
      .withPages({ limit: input.limit, page: input.page })
      .then(([data, meta]) => ({ data, meta }))
  }

  async findOneProject(projectId: string) {
    return this.core.data.project.findUnique({ where: { id: projectId } })
  }

  async updateProject(projectId: string, input: AdminUpdateProjectInput) {
    return this.core.data.project.update({ where: { id: projectId }, data: input })
  }
}
