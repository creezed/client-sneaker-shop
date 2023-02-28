import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User/model/consts/UserConst';

export type AppRouteProps = RouteProps & {
  roles?: UserRole[];
};
