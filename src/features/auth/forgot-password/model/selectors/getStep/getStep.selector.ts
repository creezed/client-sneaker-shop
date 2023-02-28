import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';

export const getStep = (state: StateSchema) => state.forgotPassword.step;
