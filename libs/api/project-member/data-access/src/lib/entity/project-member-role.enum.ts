import { registerEnumType } from '@nestjs/graphql'
import { ProjectMemberRole } from '@prisma/client'
export { ProjectMemberRole }

registerEnumType(ProjectMemberRole, { name: 'ProjectMemberRole' })