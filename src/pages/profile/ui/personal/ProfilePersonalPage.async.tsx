import { lazy } from 'react';

export const ProfilePersonalPageAsync = lazy(() => {
  return Promise.all([
    import('./ProfilePersonalPage'),
    // eslint-disable-next-line no-promise-executor-return
    new Promise(resolve => setTimeout(resolve, 100)),
  ]).then(([moduleExports]) => moduleExports);
});
