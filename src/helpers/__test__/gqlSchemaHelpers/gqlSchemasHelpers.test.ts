import { parse } from 'graphql'
import { convertFieldsToSchema } from '../../gqlSchemasHelpers'

describe('GQL Schemas Helpers', () => {
  it('Should convert fields to schema in array', () => {
    const selectFields = {
      id: true,
      images: { alt: true, src: true, position: true },
      releaseDate: { releaseDate: true, now: true },
      name: true
    }

    const querySegments = convertFieldsToSchema(selectFields, Object.keys(selectFields))
    expect(querySegments).toBeDefined()
    expect(querySegments).toMatchSnapshot('convertFieldsToSchemaInArray')
    const str = querySegments.join('\n')
    expect(() => {
      parse(`query Test {${str}}`)
    }).not.toThrow()
  })

  it('Should convert fields to schema in array with fields false', () => {
    const selectFields = {
      id: false,
      images: { id: false, src: true, alt: false, position: false },
      releaseDate: { releaseDate: false, now: true },
      name: true,
      payments: {
        name: true,
        installments: {
          total: true,
          parcelPrice: true
        }
      },
      gtin: true
    }
    const querySegments = convertFieldsToSchema(selectFields, Object.keys(selectFields))
    expect(querySegments).toBeDefined()
    expect(querySegments).toMatchSnapshot('convertFieldsToSchemaInArrayWithFieldsFalse')
    const str = querySegments.join('\n')
    expect(() => {
      parse(`query Test {${str}}`)
    }).not.toThrow()
  })
})
