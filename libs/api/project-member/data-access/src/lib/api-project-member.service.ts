import { Injectable } from '@nestjs/common'
import { ApiUserProjectMemberService } from './api-user-project-member.service'
import { ApiAdminProjectMemberService } from './api-admin-project-member.service'

@Injectable()
export class ApiProjectMemberService {
  // Use the following command to generate the CRUD for this service for a certain actor
  // nx g api-crud --app Api --model project-member --actor <admin|user|etc...>
  constructor(readonly user: ApiUserProjectMemberService, readonly admin: ApiAdminProjectMemberService) {}
}
