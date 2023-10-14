import { configureStore } from '@reduxjs/toolkit'
import ingrediencesDataSlice from './ingrediencesDataSlice'
import burgerDataSlice from './burgerDataSlice'
import orderDataSlice from './orderDataSlice'
import userDataSlice from './userDataSlice'
import feedDataSlice from './feedDataSlice'
import profileOrdersDataSlice from './profileOrdersDataSlice'
import { socketMiddleware } from './socketMiddleware'

import { setFeedSocketConnectionStatus, setFeed, feedWebSocketStart, feedWebSocketStop } from './feedDataSlice'
import { setProfileOrdersSocketConnectionStatus, setProfileOrders, profileOrdersWebSocketStart, profileOrdersWebSocketStop } from './profileOrdersDataSlice'





export const store = configureStore({
  reducer: {
    ingrediencesData: ingrediencesDataSlice,
    burgerData: burgerDataSlice,
    orderData: orderDataSlice,
    userData: userDataSlice,
    feedData: feedDataSlice,
    profileOrdersData: profileOrdersDataSlice,
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
      .concat(
        socketMiddleware({
          onStart: feedWebSocketStart,
          onStop: feedWebSocketStop,
          onOpen: setFeedSocketConnectionStatus,
          onMessage: setFeed,
          onClose: setFeedSocketConnectionStatus,
          onError: setFeedSocketConnectionStatus,
        }), 
        socketMiddleware({
          onStart: profileOrdersWebSocketStart,
          onStop: profileOrdersWebSocketStop,
          onOpen: setProfileOrdersSocketConnectionStatus,
          onMessage: setProfileOrders,
          onClose: setProfileOrdersSocketConnectionStatus,
          onError: setProfileOrdersSocketConnectionStatus,
        })
      )

})
