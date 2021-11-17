import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './features/modal/modalSlice'
import projectModalReducer from './features/modal/projectModalSlice'
import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
      modal: modalReducer,
      projectModal: projectModalReducer,
      cart: cartReducer
  },
})