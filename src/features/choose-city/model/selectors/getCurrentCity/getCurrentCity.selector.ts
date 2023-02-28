import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';

export const getCurrentCity = (state: StateSchema) =>
  state.chooseCity.currentCity;
