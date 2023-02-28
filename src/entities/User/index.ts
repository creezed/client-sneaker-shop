export type { User, UserSchema } from './model/types/user.types';
export { userReducer, userActions } from './model/slice/user.slice';
export type { Role } from './model/types/user.types';
export { getUserData } from './model/selectors/getUserData/getUserData.selector';
export {
  getIsAdminUser,
  getAllUserRoles,
} from './model/selectors/getUserRoles';
export { getUserAuth } from './model/selectors/getUserAuth/getUserAuth.selector';
