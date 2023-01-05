import { SlugRepositoryGql } from './SlugRepositoryGql'
import { SlugRepositoryJson } from './SlugRepositoryJson'
import { Slug, SlugFilter } from './SlugType'
import { BroadcastService } from 'src/services/broadcast/broadcast-service'
import { BroadcastServiceEmitType } from '../../types/BroadcastEventEmitType'
const Repository = () => (shop_ctx.mock?.slug ? SlugRepositoryJson : SlugRepositoryGql)

export class SlugService {
  static async getOne(filter?: SlugFilter): Promise<Slug> {
    try {
      const result = await Repository().getOne(filter)
      const eventType = BroadcastServiceEmitType[result.source]
      BroadcastService.emit(eventType, result)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
