import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';

export const getUserAuth = (state: StateSchema) => state.user.isAuth;
