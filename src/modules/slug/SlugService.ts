import { SlugRepositoryGql } from './SlugRepositoryGql'
import { SlugRepositoryJson } from './SlugRepositoryJson'
import { Slug, SlugFilter } from './SlugType'
import { BroadcastService } from '../../services/broadcast/broadcast-service'
const Repository = () => (shop_ctx.mock?.slug ? SlugRepositoryJson : SlugRepositoryGql)

const broadcastServiceEmitType = {
  settings: 'Settings',
  showcase: 'Showcase',
  brand: 'Brand',
  'landing-page': 'Landingpage',
  apps: 'Apps',
  blog: 'Blog',
  cart: 'Cart',
  category: 'Category',
  freight: 'Freight',
  menu: 'Menu',
  newsletter: 'Newsletter',
  pages: 'Pages',
  product: 'Product',
  scripts: 'Scripts',
  sections: 'Sections',
  shop: 'Shop',
  sidebar: 'Sidebar',
  user: 'User'
}

export class SlugService {
  static async getOne(filter?: SlugFilter): Promise<Slug> {
    try {
      const result = await Repository().getOne(filter)
      const eventType = broadcastServiceEmitType[result.source]
      BroadcastService.emit(eventType, result)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
