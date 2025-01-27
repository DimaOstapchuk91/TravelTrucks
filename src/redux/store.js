import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { campersReduser } from './campers/slice.js';

const persistCampersConfig = {
  key: 'campers',
  storage,
  whitelist: ['campers'],
};

const persistedCampersReducer = persistReducer(
  persistCampersConfig,
  campersReduser
);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
