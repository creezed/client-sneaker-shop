import { FC, PropsWithChildren } from 'react';
import { AppRoutes } from '@/shared/consts/route';

export interface LayoutProps {
  paths: AppRoutes[];
  element: FC<PropsWithChildren>;
}
