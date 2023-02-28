import { useCallback, useMemo } from 'react';
import {
  IoBagOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoSearchOutline,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { basketActions } from '@/entities/Cart';
import { getUserAuth } from '@/entities/User';
import { globalSearchActions } from '@/features/global-search';
import { AppRoutes } from '@/shared/consts/route';
import {
  NavigationKey,
  NavigationProps,
} from '@/widgets/layouts/publicLayout/model/types/navigation.type';

export const useHeaderNavigation = (): Record<
  NavigationKey,
  NavigationProps
> => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getUserAuth);
  const navigate = useNavigate();

  const handleBasketOpen = useCallback(() => {
    dispatch(basketActions.setOpen(true));
  }, [dispatch]);

  const handleSearchOpen = useCallback(() => {
    dispatch(globalSearchActions.setOpen(true));
  }, [dispatch]);

  return useMemo(
    () => ({
      [NavigationKey.FAVORITE]: {
        onClick: () => navigate(isAuth ? AppRoutes.FAVORITE : AppRoutes.LOGIN),
        icon: IoHeartOutline,
      },
      [NavigationKey.SEARCH]: {
        onClick: handleSearchOpen,
        icon: IoSearchOutline,
      },
      [NavigationKey.BASKET]: {
        onClick: handleBasketOpen,
        icon: IoBagOutline,
      },
      [NavigationKey.PROFILE]: {
        onClick: () =>
          navigate(isAuth ? AppRoutes.PROFILE_PERSONAL : AppRoutes.LOGIN),
        icon: IoPersonOutline,
      },
    }),
    [isAuth],
  );
};
