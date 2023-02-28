import { lazy } from 'react';

export const ProductsPageAsync = lazy(() => {
  return Promise.all([
    import('./ProductsPage'),
    // eslint-disable-next-line no-promise-executor-return
    new Promise(resolve => setTimeout(resolve, 100)),
  ]).then(([moduleExports]) => moduleExports);
});
