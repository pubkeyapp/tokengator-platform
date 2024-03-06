import { Prisma } from '@prisma/client'
import { UserFindManyProjectInput } from '../dto/user-find-many-project.input'

export function getUserProjectWhereInput(input: UserFindManyProjectInput): Prisma.ProjectWhereInput {
  const where: Prisma.ProjectWhereInput = {}

  if (input.search) {
    where.OR = [
      { id: { contains: input.search, mode: 'insensitive' } },
      { name: { contains: input.search, mode: 'insensitive' } },
    ]
  }

  return where
}
