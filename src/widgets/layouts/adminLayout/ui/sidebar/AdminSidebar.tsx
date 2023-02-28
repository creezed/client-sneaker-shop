import { Box, Flex } from '@chakra-ui/react';
import { AppRoutes } from '@/shared/consts/route';
import { Logo } from '@/shared/ui/logo';

export const AdminSidebar = () => {
  return (
    <Flex
      as="aside"
      flexDirection="column"
      gridArea="nav"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
    >
      <Box as="article" px={4} pt={5}>
        <Logo link={AppRoutes.HOME} />
      </Box>
    </Flex>
  );
};
