import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: 0,
  product: {}
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalShow: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.show = true
    },
    modalHide: (state) => {
        state.show = false
    },
    setModalProduct: (state, action) => {
      state.product = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { modalShow, modalHide, setModalProduct } = modalSlice.actions

export default modalSlice.reducer