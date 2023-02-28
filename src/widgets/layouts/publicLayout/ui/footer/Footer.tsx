import { Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { AppRoutes } from '@/shared/consts/route';
import { Logo } from '@/shared/ui/logo';

export const Footer = memo(() => {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      padding={12}
      flexDir="column"
      alignItems="center"
      gap={2}
    >
      <Logo align="center" link={AppRoutes.HOME} />
      <Text>2023 Все права защищены</Text>
      <Text>Разработал Creezed</Text>
    </Flex>
  );
});
