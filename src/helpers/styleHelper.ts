import * as WebFont from 'webfontloader'
import { StringHelper } from './StringHelper'
const fonts = {}

export class StyleHelper {
  static parseRootVars(variables) {
    const varList = Object.entries(variables)
    const rootVars = varList.reduce(
      (root, [key, value]) => `${root} --theme-${StringHelper.slugify(key)}: ${value};`,
      ''
    )

    return `:root{ ${rootVars} }`
  }

  static fontLoader(font: any) {
    if (font && font.family && font.fontWeight) {
      const { family, category, fontWeight } = font
      const fontLoad = family && fontWeight ? family + ':' + fontWeight : null
      const fontFamily = `${family}, ${category}`

      if (fonts[fontLoad]) return fontFamily

      WebFont.load({
        google: {
          families: [fontLoad]
        }
      })
      fonts[fontLoad] = true

      return fontFamily
    }
  }
}
