import createSocket from './createSocket'
import focusSection from './focusSection'

export class Socket {
  static async create(hashPreview, onUpdate) {
    createSocket(hashPreview, onUpdate, focusSection)
  }
}
