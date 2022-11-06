import { SettingsService } from '../SettingsService'
import 'isomorphic-fetch'

describe('Settings Module', () => {
  it('should return a settings', async () => {
    const settingResult = await SettingsService.getOne()

    expect(settingResult.data).toBeTruthy()
  })

  it('Should return a not found error', async () => {
    const settingResult = await SettingsService.getOne({ page: 'teste' })

    expect(settingResult.error).toBeTruthy()
  })
})
