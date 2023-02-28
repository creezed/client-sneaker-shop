import { LayoutProvider } from './providers/layoutProvider/ui/LayoutProvider';
import { AppRouter } from '@/app/providers/router/ui/AppRouter';

export const App = () => {
  return (
    <LayoutProvider>
      <AppRouter />
    </LayoutProvider>
  );
};
