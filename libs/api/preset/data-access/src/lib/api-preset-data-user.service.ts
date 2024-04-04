import { Injectable } from '@nestjs/common'
import { ApiPresetDataService } from './api-preset-data.service'
import { ApiPresetMinterService } from './api-preset-minter.service'
import { PresetUserFindManyInput } from './dto/preset-user-find-many.input'
import { PresetPaging } from './entity/preset.entity'
import { getPresetWhereUserInput } from './helpers/get-preset-where-user.input'

@Injectable()
export class ApiPresetDataUserService {
  constructor(private readonly data: ApiPresetDataService, private readonly minter: ApiPresetMinterService) {}

  async findManyPreset(input: PresetUserFindManyInput): Promise<PresetPaging> {
    return this.data.findMany({
      orderBy: { createdAt: 'desc' },
      where: getPresetWhereUserInput(input),
      limit: input.limit,
      page: input.page,
    })
  }

  async findOnePreset(presetId: string) {
    return this.data.findOne(presetId)
  }

  async createMinterFromPreset(userId: string, presetId: string, communityId: string) {
    // TODO: Check if userId can mint on behalf of communityId
    return this.minter.mintFromPreset(presetId, communityId)
  }
}
