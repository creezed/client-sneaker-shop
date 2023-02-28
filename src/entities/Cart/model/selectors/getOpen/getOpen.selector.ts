import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';

export const getOpen = (state: StateSchema) => state.basket.isOpen;
