import { Prisma } from '@prisma/client'
import { AdminFindManyProjectMemberInput } from '../dto/admin-find-many-project-member.input'

export function getAdminProjectMemberWhereInput(
  input: AdminFindManyProjectMemberInput,
): Prisma.ProjectMemberWhereInput {
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
