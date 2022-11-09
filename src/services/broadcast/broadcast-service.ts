export type BroadcastEvents =
  | 'Apps'
  | 'Blog'
  | 'Brand'
  | 'Cart'
  | 'Category'
  | 'Freight'
  | 'LandingPages'
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
  static emmit(eventType: BroadcastEvents, data: any) {
    const eventMessage = `send${eventType}`
    const event = new CustomEvent(eventMessage, {
      detail: data
    })

    window.dispatchEvent(event)
  }
}
