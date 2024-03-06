import { Injectable } from '@nestjs/common'
import { ProjectMemberRole } from '@prisma/client'
import { ApiCoreService, slugifyId } from '@tokengator/api-core-data-access'
import { UserCreateProjectInput } from './dto/user-create-project.input'
import { UserFindManyProjectInput } from './dto/user-find-many-project.input'
import { UserUpdateProjectInput } from './dto/user-update-project.input'
import { ProjectPaging } from './entity/project-paging.entity'
import { getUserProjectWhereInput } from './helpers/get-user-project-where.input'

@Injectable()
export class ApiUserProjectService {
  constructor(private readonly core: ApiCoreService) {}

  async createProject(userId: string, input: UserCreateProjectInput) {
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

  async findManyProject(input: UserFindManyProjectInput): Promise<ProjectPaging> {
    return this.core.data.project
      .paginate({
        orderBy: { createdAt: 'desc' },
        where: getUserProjectWhereInput(input),
      })
      .withPages({ limit: input.limit, page: input.page })
      .then(([data, meta]) => ({ data, meta }))
  }

  async findOneProject(slug: string) {
    return this.core.data.project.findUnique({ where: { slug } })
  }

  async updateProject(projectId: string, input: UserUpdateProjectInput) {
    return this.core.data.project.update({ where: { id: projectId }, data: input })
  }
}
