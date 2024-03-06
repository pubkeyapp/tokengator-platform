import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@tokengator/api-core-data-access'
import { ApiProjectMemberService } from './api-project-member.service'
import { ApiUserProjectMemberService } from './api-user-project-member.service'
import { ApiAdminProjectMemberService } from './api-admin-project-member.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiProjectMemberService, ApiUserProjectMemberService, ApiAdminProjectMemberService],
  exports: [ApiProjectMemberService],
})
export class ApiProjectMemberDataAccessModule {}
