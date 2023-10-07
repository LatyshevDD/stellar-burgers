export function socketMiddleware(wsConfig) {
  return (store) => {
    let socket = null
    const {
      onOpen
    } = wsConfig
    return (next) => {
      return (action) => {
        const { type, payload } = action
        const { dispath } = store

        if (type === 'wsInit') {
          socket = new WebSocket(payload)
        }

        socket.onOpen = (event) => {
          console.log(event)
        }
        
        next(action)
      }
    }
  }
}