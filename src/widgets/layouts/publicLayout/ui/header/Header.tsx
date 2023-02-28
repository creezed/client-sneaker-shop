import { Container, Flex } from '@chakra-ui/react';
import { memo } from 'react';
import { GlobalSearch } from '@/features/global-search';
import { AppRoutes } from '@/shared/consts/route';
import { Logo } from '@/shared/ui/logo';
import { Menu } from '@/widgets/layouts/publicLayout/ui/header/menu/Menu';
import { Navigation } from '@/widgets/layouts/publicLayout/ui/header/navigation/Navigation';

export const Header = memo(() => {
  return (
    <Flex
      as="header"
      flexDirection="column"
      borderBottom="1px solid"
      borderColor="gray.50"
    >
      <Flex
        h="68px"
        align="center"
        gap={4}
        justify="space-between"
        as={Container}
        maxW="1440px"
      >
        <Flex align="center" h="full" gap={12} maxW="600px" w="full" as="nav">
          <Logo link={AppRoutes.HOME} />
          <Menu />
        </Flex>
        <Navigation />
      </Flex>
      <GlobalSearch />
    </Flex>
  );
});
