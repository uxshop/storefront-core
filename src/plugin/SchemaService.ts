import FileHound from 'filehound'
import fs from 'fs'
import path from 'path'

export interface SchemaFile {
  schema: string
  path: string
  fileName: string
}

export class SchemaService {
  schemaTypes = {
    preset: 'preset',
    section: 'schema',
    settings: 'settings-schema'
  }

  private getParentDirectory(pathName: string): SchemaFile {
    const schema = pathName.split('/').slice(-2, -1)[0]
    return {
      schema,
      path: pathName,
      fileName: path.basename(pathName)
    }
  }

  private async getPaths(themePath: string, bundletype: string): Promise<SchemaFile[]> {
    try {
      const files = await FileHound.create()
        .paths(themePath)
        .ext('json')
        .match(`${this.schemaTypes[bundletype]}*`)
        .find()

      const directories = files.map(this.getParentDirectory)
      return directories
    } catch (error) {
      throw new Error(`Error getting files path`)
    }
  }

  private async getContent(directory: SchemaFile): Promise<Record<string, unknown>> {
    try {
      const data = await fs.promises.readFile(directory.path, 'utf8')
      const content = JSON.parse(data)
      return content
    } catch (error) {
      throw new Error('Error getting file contents')
    }
  }

  private async bundleGenerator(themePath: string, bundleType: string): Promise<Record<string, unknown> | string[]> {
    const toContent = async (directory: SchemaFile) => ({
      [directory.schema]: await this.getContent(directory),
      fileName: directory.fileName
    })

    const getDraftBundle = async contents => await Promise.all(contents)
    const draftBundleToBundle = draftBundle => Object.assign({}, ...draftBundle)

    try {
      const directories = await this.getPaths(themePath, bundleType)
      const contents = await directories.map(toContent)
      const draftBundle = await getDraftBundle(contents)
      if (bundleType === this.schemaTypes.preset) {
        return draftBundle
      }

      return draftBundleToBundle(draftBundle)
    } catch (error) {
      throw new Error('Error generating bundle')
    }
  }

  private writeBundleFile(content, dir) {
    fs.mkdir(
      path.dirname(dir),
      {
        recursive: true
      },
      error => {
        if (error) throw new Error(`Error create diretory ${error}`)

        fs.writeFile(dir, typeof content === 'string' ? content : JSON.stringify(content), error => {
          if (error) throw new Error(`Error write bundle ${error}`)
        })
      }
    )
  }

  async getSettingsBundle(themePath: string): Promise<string> {
    try {
      const bundle = await this.bundleGenerator(`${themePath}/src/`, 'settings')
      return JSON.stringify(bundle['config'])
    } catch (error) {
      throw new Error(`Error returning settings bundle ${error}`)
    }
  }

  async getSectionBundle(themePath: string): Promise<string> {
    try {
      const bundle = await this.bundleGenerator(`${themePath}/src/`, 'section')
      delete bundle['fileName']
      return JSON.stringify(bundle)
    } catch (error) {
      throw new Error(`Error returning sections bundle ${error}`)
    }
  }

  async getPresetBundle(themePath: string): Promise<any> {
    try {
      const bundle = await this.bundleGenerator(`${themePath}/src/`, 'preset')

      return bundle
    } catch (error) {
      throw new Error(`Error returning presets bundle ${error}`)
    }
  }

  async generateSettingsBundle(themePath: string) {
    try {
      const bundle = await this.getSettingsBundle(themePath)
      const pathDir = `${themePath}/public/schemas/settings.json`

      this.writeBundleFile(bundle, pathDir)

      return bundle
    } catch (error) {
      throw new Error(`Error generate settings bundle ${error}`)
    }
  }

  async generateSectionBundle(themePath: string) {
    try {
      const bundle = await this.getSectionBundle(themePath)

      const pathDir = `${themePath}/public/schemas/sections.json`

      this.writeBundleFile(bundle, pathDir)

      return bundle
    } catch (error) {
      throw new Error(`Error generate sections bundle ${error}`)
    }
  }

  async generatePresetBundle(themePath: string) {
    try {
      const bundles = await this.getPresetBundle(themePath)
      bundles.forEach(async bundle => {
        let pathDir = `${themePath}/public/presets/${bundle.fileName}`

        this.writeBundleFile(bundle['presets'], pathDir)
      })
    } catch (error) {
      throw new Error(`Error generate presets bundle ${error}`)
    }
  }
}
