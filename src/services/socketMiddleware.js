import { checkOrdersIngredients } from "../utils/utils"

export const socketMiddleware = wsConfig => store => {
  let socket = null
  const { onStart, onStop, onOpen, onMessage, onClose, onError } = wsConfig

  return next => action => {
    const { type, payload } = action
    const { dispatch } = store
    
    if (type === onStart) {
      socket = new WebSocket(payload)
    }
    
    if(socket) {
      if (type === onStop) {
        socket.close(1000, 'Пользователь покинул страницу')
      }

      socket.onopen = event => {
        dispatch(onOpen(event.type))
      }

      socket.onclose = event => {
        if(event.wasClean) {
          dispatch(onClose('Closed correct'))
        } else {
          dispatch(onClose('Closed uncorrect'))
        }
      }

      socket.onerror = event => {
        dispatch(onError(event.message))
      }
    
      socket.onmessage = event => {
        let data = JSON.parse(event.data)
        let chekedData = {
          ...data,
          orders: checkOrdersIngredients(data.orders)
        }
        dispatch(onMessage(chekedData))
      }
    }

    return next(action)
  }

}