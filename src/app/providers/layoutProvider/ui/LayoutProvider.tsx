import { FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { layoutConfig } from '@/app/providers/layoutProvider/config/layoutConfig';
import { AppRoutes } from '@/shared/consts/route';

export const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  const layout = Object.values(layoutConfig).find(item =>
    item.paths.includes(location.pathname as AppRoutes),
  );

  return (
    <>
      {layout && <layout.element>{children}</layout.element>}
      {!layout && children}
    </>
  );
};
