import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalTitle: '',
    redirectRoute: '/'
  },
  reducers: {
    showModal: (state, action) => {
      const { isOpen, modalTitle, redirectRoute } = action.payload
      state.isOpen = isOpen
      state.modalTitle = modalTitle
      state.redirectRoute = redirectRoute
    },

    closeModal: (state) => {
      state.isOpen = false
      state.modalTitle = '',
      state.redirectRoute = '/'
    },
  },
})

export const { showModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
