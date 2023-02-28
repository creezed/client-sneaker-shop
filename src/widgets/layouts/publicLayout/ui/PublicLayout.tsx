import { Box, Container } from '@chakra-ui/react';
import { FC, memo, PropsWithChildren } from 'react';
import { Cart } from '@/entities/Cart/ui/Cart';
import { Footer } from '@/widgets/layouts/publicLayout/ui/footer/Footer';
import { Header } from '@/widgets/layouts/publicLayout/ui/header/Header';

export const PublicLayout: FC<PropsWithChildren> = memo(
  ({ children }: PropsWithChildren) => {
    return (
      <>
        <Header />
        <Box
          flexGrow={1}
          as={Container}
          maxW="1440px"
          h="full"
          display="flex"
          flexDirection="column"
        >
          {children}
        </Box>
        <Footer />
        <Cart />
      </>
    );
  },
);
