import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';
import { basketReducer } from '@/entities/Cart';
import { userReducer } from '@/entities/User';
import { forgotPasswordReducer } from '@/features/auth/forgot-password';
import { chooseCityReducer } from '@/features/choose-city';
import { filterReducer } from '@/features/filter/by-product';
import { globalSearchReducer } from '@/features/global-search';
import { userAddressReduces } from '@/features/user-address';
import { rtkApi } from '@/shared/api/rtkApi';

export const rootReducer = combineReducers<Record<keyof StateSchema, Reducer>>({
  user: userReducer,
  basket: basketReducer,
  chooseCity: chooseCityReducer,
  globalSearch: globalSearchReducer,
  forgotPassword: forgotPasswordReducer,
  filter: filterReducer,
  userAddress: userAddressReduces,
  [rtkApi.reducerPath]: rtkApi.reducer,
});
