import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';

export const getAllUserRoles = (state: StateSchema) =>
  state.user.data?.roles.map(role => role.value);
