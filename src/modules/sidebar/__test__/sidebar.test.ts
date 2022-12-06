import { SidebarService } from '../SidebarService'
import 'isomorphic-fetch'

describe('Sidebar Module', () => {
  it('Should get sidebar with no filter successfully', async () => {
    const sidebarResult = await SidebarService.get()
    expect(sidebarResult.filtered[0]).toBeUndefined()
    expect(sidebarResult.filters[0]?.type).toEqual('attribute')
  })

  it('Should get sidebar with filter successfully', async () => {
    const SIDEBAR_FILTER = [{ id: 461737, name: '110', type: 'attribute' }]
    const sidebarResult = await SidebarService.get(SIDEBAR_FILTER)
    expect(sidebarResult.filtered[0].id).toEqual(SIDEBAR_FILTER[0].id)
    expect(sidebarResult.filtered[0].name).toEqual(SIDEBAR_FILTER[0].name)
    expect(sidebarResult.filtered[0].type).toEqual(SIDEBAR_FILTER[0].type)
  })
})
