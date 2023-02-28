import { AppRoutes } from '@/shared/consts/route';
import { Menu } from '@/widgets/layouts/publicLayout/model/types/menu.type';

export const menu: Menu[] = [
  {
    label: 'Новинки',
    link: `${AppRoutes.PRODUCTS}?category=new`,
  },
  {
    label: 'Мужское',
    link: `${AppRoutes.PRODUCTS}?gender=male`,
  },
  {
    label: 'Женское',
    link: `${AppRoutes.PRODUCTS}?gender=female`,
  },
  {
    label: 'Скидки',
    link: `${AppRoutes.PRODUCTS}?category=sale`,
  },
];
