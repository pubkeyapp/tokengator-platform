import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@tokengator/api-core-data-access'
import { ApiProjectService } from './api-project.service'
import { ApiUserProjectService } from './api-user-project.service'
import { ApiAdminProjectService } from './api-admin-project.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiProjectService, ApiUserProjectService, ApiAdminProjectService],
  exports: [ApiProjectService],
})
export class ApiProjectDataAccessModule {}
