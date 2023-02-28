import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';

export const getFilter = (state: StateSchema) => state.filter.items;
