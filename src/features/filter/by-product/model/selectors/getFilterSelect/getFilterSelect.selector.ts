import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';

export const getFilterSelect = (state: StateSchema) => state.filter.select;
