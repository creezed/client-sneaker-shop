import { IconType } from 'react-icons';
import { AppRoutes } from '@/shared/consts/route';

export interface NavigationProps {
  icon: IconType;
  label: string;
  path?: AppRoutes;
  onClick: () => void;
}

export enum NavigationKey {
  PERSONAL = 'personal',
  ORDERS = 'orders',
  NOTIFICATIONS = 'notifications',
  EXIT = 'exit',
}
