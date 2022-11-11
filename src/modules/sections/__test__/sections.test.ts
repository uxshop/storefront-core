import 'isomorphic-fetch'
import { SectionsService } from '../SectionsService'

describe('Sections Module', () => {
  it('Should get section by themeId with selected field successfully', async () => {
    const THEME_ID = 55
    const sectionResult = await SectionsService.getOne({ themeId: THEME_ID })
    expect.objectContaining(sectionResult.header)
    expect.arrayContaining(sectionResult.content)
    expect.objectContaining(sectionResult.footer)
  })

  it('Should return a not found error', async () => {
    expect(async () => await SectionsService.getOne({ themeId: 9999999 })).rejects.toThrow()
  })
})
