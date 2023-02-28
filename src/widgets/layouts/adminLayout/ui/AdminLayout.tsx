import { Grid, GridItem } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { AdminHeader } from '@/widgets/layouts/adminLayout/ui/header/AdminHeader';
import { AdminSidebar } from '@/widgets/layouts/adminLayout/ui/sidebar/AdminSidebar';

export const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"
                 `}
      gridTemplateRows="60px 1fr"
      gridTemplateColumns="240px 1fr"
      maxH="100vh"
      minH="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
      as="section"
    >
      <AdminHeader />
      <AdminSidebar />
      <GridItem p={6} bg="bg" area="main" as="article">
        {children}
      </GridItem>
    </Grid>
  );
};
