import { Module } from '@nestjs/common'
import { ApiProjectDataAccessModule } from '@tokengator/api-project-data-access'
import { ApiProjectResolver } from './api-project.resolver'
import { ApiUserProjectResolver } from './api-user-project.resolver'
import { ApiAdminProjectResolver } from './api-admin-project.resolver'

@Module({
  imports: [ApiProjectDataAccessModule],
  providers: [ApiProjectResolver, ApiUserProjectResolver, ApiAdminProjectResolver],
})
export class ApiProjectFeatureModule {}
