import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import moreSlice from '../features/more/state/moreSlice';

export const Store = configureStore({
  reducer: {
    category: moreSlice,
  },
});
export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>; //?
export default Store;
