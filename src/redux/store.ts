import { configureStore } from '@reduxjs/toolkit'
import ModalSlice from './modal-slice/modal-slice'

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store