import { LayoutsKeys } from '@/shared/consts/layout';
import { AppRoutes } from '@/shared/consts/route';
import { LayoutProps } from '@/shared/types/layout.type';
import { AdminLayout } from '@/widgets/layouts/adminLayout';
import { ProfileLayout } from '@/widgets/layouts/profileLayout';
import { PublicLayout } from '@/widgets/layouts/publicLayout';

export const layoutConfig: Record<LayoutsKeys, LayoutProps> = {
  [LayoutsKeys.PUBLIC]: {
    paths: [AppRoutes.HOME, AppRoutes.FAVORITE, AppRoutes.PRODUCTS],
    element: PublicLayout,
  },
  [LayoutsKeys.PROFILE]: {
    paths: [AppRoutes.PROFILE_ORDERS, AppRoutes.PROFILE_PERSONAL],
    element: ProfileLayout,
  },
  [LayoutsKeys.ADMIN]: {
    paths: [AppRoutes.ADMIN_HOME],
    element: AdminLayout,
  },
};
