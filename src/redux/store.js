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
import { favoritesReducer } from './favorites/slice.js';

const persistFavorites = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const persistFilters = {
  key: 'userFilter',
  storage,
  whitelist: ['userFilter', 'params'],
};

const persistedFavoritesReducer = persistReducer(
  persistFavorites,
  favoritesReducer
);
const persistedCampersReducer = persistReducer(persistFilters, campersReduser);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
