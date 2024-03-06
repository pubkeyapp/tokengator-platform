import { Module } from '@nestjs/common'
import { ApiProjectMemberDataAccessModule } from '@tokengator/api-project-member-data-access'
import { ApiProjectMemberResolver } from './api-project-member.resolver'
import { ApiUserProjectMemberResolver } from './api-user-project-member.resolver'
import { ApiAdminProjectMemberResolver } from './api-admin-project-member.resolver'

@Module({
  imports: [ApiProjectMemberDataAccessModule],
  providers: [ApiProjectMemberResolver, ApiUserProjectMemberResolver, ApiAdminProjectMemberResolver],
})
export class ApiProjectMemberFeatureModule {}
