import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentCart: {}
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const { _id } = item;

      if(state.currentCart[_id]){
        state.currentCart[_id].quantity++
      } else {
        const productData = {
          'quantity': 1
        }

        state.currentCart[_id] = productData;
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const { _id } = item;

      if(state.currentCart[_id].quantity <= 1){
        delete state.currentCart[_id]
      } else {
        state.currentCart[_id].quantity--
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions

export const selectCartCount = (state) => {
  return state.cart.currentCart &&   
    Object.values(state.cart.currentCart).reduce((a, {quantity}) => a + quantity, 0)
}
export default cartSlice.reducer

