import { Flex, Grid } from '@chakra-ui/react';
import { memo, PropsWithChildren } from 'react';

import { Navigation } from '@/widgets/layouts/profileLayout/ui/navigation/Navigation';
import { PublicLayout } from '@/widgets/layouts/publicLayout';

export const ProfileLayout = memo(({ children }: PropsWithChildren) => {
  return (
    <PublicLayout>
      <Grid
        gridTemplateColumns="240px 1fr"
        gap="5rem"
        as="section"
        alignItems="flex-start"
        mt={12}
      >
        <Navigation />
        <Flex maxW="800px" w="full" as="article" flexDirection="column">
          {children}
        </Flex>
      </Grid>
    </PublicLayout>
  );
});
