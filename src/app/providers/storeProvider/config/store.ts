import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from '@/app/providers/storeProvider/config/rootReducer';
import { rtkQueryErrorLogger } from '@/app/providers/storeProvider/middlewares/api.middleware';
import { rtkApi } from '@/shared/api/rtkApi';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['user', 'chooseCity'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(rtkQueryErrorLogger)
      .concat(rtkApi.middleware),
});

export const persistor = persistStore(store);
