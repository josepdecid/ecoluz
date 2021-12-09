import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { loadSavedSettings } from '../actions/settingsActions';
import ratesReducer from './ratesReducer';
import settingsReducer from './settingsReducer';

export const store = configureStore({
  reducer: {
    rates: ratesReducer,
    settings: settingsReducer,
  },
});

store.dispatch(loadSavedSettings());

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
