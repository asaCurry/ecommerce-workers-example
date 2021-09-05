import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  product: {}
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalShow: (state) => {
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