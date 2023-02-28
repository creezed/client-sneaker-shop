import { createStandaloneToast } from '@chakra-ui/react';
import { useMemo } from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import { FaDoorOpen, FaThList, FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from '@/entities/User';
import { logoutApi } from '@/features/auth/logout';
import { AppRoutes } from '@/shared/consts/route';
import {
  NavigationKey,
  NavigationProps,
} from '@/widgets/layouts/profileLayout/model/types/navigation.type';

const { toast } = createStandaloneToast();
export const useProfileNavigation = (): Record<
  NavigationKey,
  NavigationProps
> => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = async () => {
    await logoutApi();
    dispatch(userActions.setAuthData(undefined));
    dispatch(userActions.setIsAuth(false));
    toast({
      title: 'Успех',
      description: 'Успешный выход',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
    navigate(AppRoutes.HOME);
  };

  return useMemo(
    () => ({
      [NavigationKey.PERSONAL]: {
        label: 'Мои данные',
        icon: FaUserAlt,
        path: AppRoutes.PROFILE_PERSONAL,
        onClick: () => navigate(AppRoutes.PROFILE_PERSONAL),
      },
      [NavigationKey.ORDERS]: {
        label: 'Мои заказы',
        icon: FaThList,
        path: AppRoutes.PROFILE_ORDERS,
        onClick: () => navigate(AppRoutes.PROFILE_ORDERS),
      },
      [NavigationKey.NOTIFICATIONS]: {
        label: 'Настройки',
        icon: BsFillGearFill,
        onClick: () => {},
      },
      [NavigationKey.EXIT]: {
        label: 'Выход',
        icon: FaDoorOpen,
        onClick: logout,
      },
    }),
    [],
  );
};
