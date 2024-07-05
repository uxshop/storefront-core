export type BroadcastEvents =
  | 'Apps'
  | 'Blog'
  | 'Brand'
  | 'Cart'
  | 'Category'
  | 'Freight'
  | 'LandingPages'
  | 'LiveShop'
  | 'Menu'
  | 'Newsletter'
  | 'Pages'
  | 'Product'
  | 'Scripts'
  | 'Sections'
  | 'Settings'
  | 'Shop'
  | 'Sidebar'
  | 'User'

export class BroadcastService {
  static emit(eventType: BroadcastEvents, data: any) {
    const eventMessage = `send${eventType}`
    const event = new CustomEvent(eventMessage, {
      detail: data
    })

    data && window.dispatchEvent(event)
  }
}
