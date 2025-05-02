import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './modal-slice/modal-slice';

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
  },
});

// Export RootState and AppDispatch types for usage throughout your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
