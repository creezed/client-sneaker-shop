import { Portal, Progress } from '@chakra-ui/react';
import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/app/providers/router/config/routerConfig';
import { GuardAuth } from '@/app/providers/router/ui/GuardAuth';
import { AppRouteProps } from '@/shared/types/route.type';

export const AppRouter = () => {
  const renderRoute = useCallback((route: AppRouteProps) => {
    const loadElement = (
      <Suspense
        fallback={
          <Portal>
            <Progress
              size="xs"
              position="fixed"
              colorScheme="red"
              top={0}
              right={0}
              left={0}
              isIndeterminate
            />
          </Portal>
        }
      >
        {route.element}
      </Suspense>
    );
    const validElement = route.roles ? (
      <GuardAuth roles={route.roles}>{loadElement}</GuardAuth>
    ) : (
      loadElement
    );

    return <Route key={route.path} path={route.path} element={validElement} />;
  }, []);

  return <Routes>{Object.values(routerConfig).map(renderRoute)}</Routes>;
};
