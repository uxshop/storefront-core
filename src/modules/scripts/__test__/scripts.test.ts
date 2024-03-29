import { ScriptFields } from '../ScriptsTypes'
import { ScriptsService } from '../ScriptsService'
import 'isomorphic-fetch'

const PAGE_FILTER = 'all'
const LOCATION_FILTER = 'footer'
const SELECTED_FIELDS: ScriptFields[] = ['id', 'name']

describe('Script Module', () => {
  it('Should get all scripts with all fields successfully', async () => {
    const scriptResult = await ScriptsService.getList()
    expect(scriptResult.length).toBeGreaterThan(0)
  })

  it('Should get scripts by page with all fields successfully', async () => {
    const scriptResult = await ScriptsService.getListByPage(PAGE_FILTER)
    expect(scriptResult[0].page).toEqual(PAGE_FILTER)
  })

  it('Should get scripts by location with all fields successfully', async () => {
    const scriptResult = await ScriptsService.getListByLocation(LOCATION_FILTER)
    expect(scriptResult[0].location).toEqual(LOCATION_FILTER)
  })

  it('Should get all scripts with selected fields successfully', async () => {
    const scriptResult = await ScriptsService.getList([...SELECTED_FIELDS])
    scriptResult.forEach(script => {
      const scriptKeys = Object.keys(script)
      expect(scriptKeys).toEqual(SELECTED_FIELDS)
      expect(scriptKeys.length).toEqual(SELECTED_FIELDS.length)
    })
  })

  it('Should try to get scripts by inexistent page and it should throw error', async () => {
    expect(async () => await ScriptsService.getListByPage('inexistent-page')).rejects.toThrow()
  })
})
