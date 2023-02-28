import { lazy } from 'react';

export const OrdersPageAsync = lazy(() => {
  return Promise.all([
    import('./OrdersPage'),
    // eslint-disable-next-line no-promise-executor-return
    new Promise(resolve => setTimeout(resolve, 100)),
  ]).then(([moduleExports]) => moduleExports);
});
