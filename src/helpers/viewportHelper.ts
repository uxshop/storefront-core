export class ViewportHelper {
  static getSize() {
    const width = window.innerWidth
    const height = window.innerHeight

    return { width, height }
  }

  static widthGreaterThan(width) {
    return this.getSize().width >= width
  }

  static widthLessThan(width) {
    return this.getSize().width <= width
  }

  static heightGreaterhan(height) {
    return this.getSize().height >= height
  }

  static heightLessThan(height) {
    return this.getSize().height <= height
  }

  static isMobile() {
    const regexMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    return regexMobile.test(navigator.userAgent) && this.widthLessThan(1024)
  }
}
