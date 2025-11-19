import { ArrayHelper } from './arrayHelper'
import { ToBooleanRecursive } from './typesHelper'

export function convertFieldsToSchema(
  fields: ToBooleanRecursive<any>,
  keys: string[],
  result: string[] = []
): string[] {
  const key = keys.shift()
  const target = fields[key]

  if (typeof target === 'object') {
    const schema = `${key} {`
    const objStartIndex = result.push(schema) - 1
    convertFieldsToSchema(
      fields[key] as { [key: string]: boolean },
      Object.keys(fields[key] as { [key: string]: boolean }),
      result
    )
    if (result[objStartIndex].includes('{') && !result[objStartIndex].includes('}')) {
      result.push('}')
    }
  }

  let lastItem = ArrayHelper.lastItem(result)
  if (lastItem.includes('{') && !lastItem.includes('}')) {
    if (target) result[result.length - 1] += ` ${key}`
    if (keys.length === 0) {
      result[result.length - 1] += ' }'
      return result
    }
    return convertFieldsToSchema(fields, keys, result)
  }

  if (typeof target === 'boolean' && target) {
    result.push(`${key} `)
  }

  if (keys.length === 0) {
    return result
  }

  return convertFieldsToSchema(fields, keys, result)
}
