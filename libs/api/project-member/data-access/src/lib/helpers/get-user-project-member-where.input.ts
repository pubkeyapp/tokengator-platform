import { Prisma } from '@prisma/client'
import { UserFindManyProjectMemberInput } from '../dto/user-find-many-project-member.input'

export function getUserProjectMemberWhereInput(input: UserFindManyProjectMemberInput): Prisma.ProjectMemberWhereInput {
  const where: Prisma.ProjectMemberWhereInput = {
    projectId: input.projectId,
  }

  if (input.search) {
    where.OR = [
      { id: { contains: input.search, mode: 'insensitive' } },
      { user: { username: { contains: input.search, mode: 'insensitive' } } },
    ]
  }

  return where
}
