import { io } from 'socket.io-client'

function createSocket(hash, onUpdate, onFocus) {
  const URL = shop_ctx.api_editor
  const socketIO = io(URL, { autoConnect: false, query: { hash } })

  socketIO.connect()
  socketIO.on('UPDATE_SETTINGS_DATA', onUpdate)
  socketIO.on('FOCUS_SECTION', onFocus)
}

export default createSocket
