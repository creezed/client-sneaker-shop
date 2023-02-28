import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';
import { UserRole } from '@/entities/User/model/consts/UserConst';

export const getIsAdminUser = (state: StateSchema): boolean =>
  state.user.data?.roles.some(role => role.value === UserRole.ADMIN) || false;
