import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter-slice/counter-slice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})