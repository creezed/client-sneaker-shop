import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAllUserRoles, getUserAuth } from '@/entities/User';
import { UserRole } from '@/entities/User/model/consts/UserConst';
import { AppRoutes } from '@/shared/consts/route';

interface RequireAuthProps {
  roles?: UserRole[];
  children: JSX.Element;
}

export const GuardAuth = ({
  roles,
  children,
}: RequireAuthProps): JSX.Element => {
  const auth = useSelector(getUserAuth);
  const userRoles = useSelector(getAllUserRoles);

  const isUserHasRole: boolean = useMemo(() => {
    if (!roles) {
      return false;
    }

    return roles.some(role => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={AppRoutes.HOME} replace />;
  }
  if (!isUserHasRole) {
    return <Navigate to={AppRoutes.HOME} replace />;
  }
  return children;
};
