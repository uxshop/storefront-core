export class StringHelper {
  private static normalizeText(text: string) {
    return text.replace(/\.?([A-Z]+)/g, m => ` ${m.toLowerCase()}`).trim()
  }

  static slugify(text: string): string {
    const textNormal = this.normalizeText(text)
    return textNormal
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, '-')
  }
}
