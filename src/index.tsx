import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/storeProvider/ui/StoreProvider';
import { theme } from '@/app/styles/theme';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Container root not found. Failed to mount react app');
}

const root = createRoot(container);
const { ToastContainer } = createStandaloneToast();

root.render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ChakraProvider theme={theme}>
            <App />
              <ToastContainer/>
          </ChakraProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
);
