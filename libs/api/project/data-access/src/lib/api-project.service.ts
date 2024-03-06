import { Injectable } from '@nestjs/common'
import { ApiUserProjectService } from './api-user-project.service'
import { ApiAdminProjectService } from './api-admin-project.service'

@Injectable()
export class ApiProjectService {
  // Use the following command to generate the CRUD for this service for a certain actor
  // nx g api-crud --app Api --model project --actor <admin|user|etc...>
  constructor(readonly user: ApiUserProjectService, readonly admin: ApiAdminProjectService) {}
}
