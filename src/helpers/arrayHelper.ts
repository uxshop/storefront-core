export class ArrayHelper {
  static lastItem(list: string[]): string {
    if (list.length === 0) {
      return ''
    }
    return list[list.length - 1]
  }
}
