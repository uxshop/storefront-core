import FileHound from 'filehound'
import fs from 'fs'

export interface SchemaFile {
  schema: string
  path: string
}

export class SchemaService {
  schemaTypes = {
    section: 'schema',
    settings: 'settings-schema'
  }

  private getParentDirectory(path: string): SchemaFile {
    const schema = path.split('/').slice(-2, -1)[0]
    return {
      schema,
      path
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

  private async bundleGenerator(themePath: string, bundleType: string): Promise<Record<string, unknown>> {
    const toContent = async (directory: SchemaFile) => ({ [directory.schema]: await this.getContent(directory) })
    const getDraftBundle = async contents => await Promise.all(contents)
    const draftBundleToBundle = draftBundle => Object.assign({}, ...draftBundle)

    try {
      const directories = await this.getPaths(themePath, bundleType)
      const contents = directories.map(toContent)
      const draftBundle = await getDraftBundle(contents)

      return draftBundleToBundle(draftBundle)
    } catch (error) {
      throw new Error('Error generating bundle')
    }
  }

  async getSettingsBundle(themePath: string): Promise<string> {
    console.log('themepath', themePath)

    try {
      const bundle = await this.bundleGenerator(`${themePath}/src/`, 'settings')
      return JSON.stringify(bundle)
    } catch (error) {
      throw new Error(`Error returning settings bundle ${error}`)
    }
  }

  async getSectionBundle(themePath: string): Promise<string> {
    try {
      const bundle = await this.bundleGenerator(`${themePath}/src/`, 'section')
      return JSON.stringify(bundle)
    } catch (error) {
      throw new Error(`Error returning sections bundle ${error}`)
    }
  }
}
