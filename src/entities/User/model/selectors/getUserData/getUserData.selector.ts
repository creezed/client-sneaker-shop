import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';

export const getUserData = (state: StateSchema) => state.user?.data;
