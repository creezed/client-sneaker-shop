import { IconType } from 'react-icons';

export interface NavigationProps {
  icon: IconType;
  onClick: () => void;
}

export enum NavigationKey {
  FAVORITE = 'favorite',
  BASKET = 'basket',
  SEARCH = 'search',
  PROFILE = 'profile',
}
