import { Module } from '@nestjs/common'
import { ApiAuthFeatureModule } from '@tokengator/api-auth-feature'
import { ApiCoreDataAccessModule } from '@tokengator/api-core-data-access'
import { ApiIdentityFeatureModule } from '@tokengator/api-identity-feature'
import { ApiUserFeatureModule } from '@tokengator/api-user-feature'
import { ApiCoreController } from './api-core.controller'
import { ApiCoreResolver } from './api-core.resolver'

const imports = [
  // The api-feature generator will add the imports here
  ApiAuthFeatureModule,
  ApiCoreDataAccessModule,
  ApiIdentityFeatureModule,
  ApiUserFeatureModule,
]

@Module({
  controllers: [ApiCoreController],
  imports: [...imports],
  providers: [ApiCoreResolver],
})
export class ApiCoreFeatureModule {}
