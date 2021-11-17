import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  project: {}
}

export const projectModalSlice = createSlice({
  name: 'projectModal',
  initialState,
  reducers: {
    projectModalShow: (state) => {
      state.show = true
    },
    projectModalHide: (state) => {
        state.show = false
    },
    setProjectModalProject: (state, action) => {
      state.project = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { projectModalShow, projectModalHide, setProjectModalProject } = projectModalSlice.actions

export default projectModalSlice.reducer