import { UserRole } from '@/entities/User/model/consts/UserConst';
import { NotFoundPage } from '@/pages/404';
import { AdminHomePage } from '@/pages/admin';
import { CheckoutPage } from '@/pages/checkout';
import FavoritesPage from '@/pages/favorites/ui/FavoritesPage';
import { ForgotPasswordPage } from '@/pages/forgot-password';
import { HomePage } from '@/pages/home';
import { ProductsPage } from '@/pages/products';
import { ProfileOrdersPage, ProfilePersonalPage } from '@/pages/profile';
import { SignInPage } from '@/pages/sign-in';
import { SignUpPage } from '@/pages/sign-up';
import { AppRoutes, AppRoutesKeys } from '@/shared/consts/route';
import { AppRouteProps } from '@/shared/types/route.type';

export const routerConfig: Record<AppRoutesKeys, AppRouteProps> = {
  [AppRoutesKeys.HOME]: {
    path: AppRoutes.HOME,
    element: <HomePage />,
  },
  [AppRoutesKeys.CHECKOUT]: {
    path: AppRoutes.CHECKOUT,
    element: <CheckoutPage />,
  },
  [AppRoutesKeys.PRODUCTS]: {
    path: AppRoutes.PRODUCTS,
    element: <ProductsPage />,
  },
  [AppRoutesKeys.LOGIN]: {
    path: AppRoutes.LOGIN,
    element: <SignInPage />,
  },
  [AppRoutesKeys.REGISTRATION]: {
    path: AppRoutes.REGISTRATION,
    element: <SignUpPage />,
  },
  [AppRoutesKeys.ERROR]: {
    path: AppRoutes.ERROR,
    element: <NotFoundPage />,
  },
  [AppRoutesKeys.FORGOT_PASSWORD]: {
    path: AppRoutes.FORGOT_PASSWORD,
    element: <ForgotPasswordPage />,
  },
  [AppRoutesKeys.PROFILE_PERSONAL]: {
    path: AppRoutes.PROFILE_PERSONAL,
    element: <ProfilePersonalPage />,
    roles: [UserRole.USER],
  },
  [AppRoutesKeys.PROFILE_ORDERS]: {
    path: AppRoutes.PROFILE_ORDERS,
    element: <ProfileOrdersPage />,
    roles: [UserRole.USER],
  },
  [AppRoutesKeys.FAVORITE]: {
    path: AppRoutes.FAVORITE,
    element: <FavoritesPage />,
    roles: [UserRole.USER],
  },
  [AppRoutesKeys.ADMIN_HOME]: {
    path: AppRoutes.ADMIN_HOME,
    element: <AdminHomePage />,
  },
};
