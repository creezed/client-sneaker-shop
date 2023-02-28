import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { menu } from '@/widgets/layouts/publicLayout/model/consts/menu';

export const Menu = () => {
  return (
    <Flex as="nav" align="center" h="full" flex={1}>
      {menu.map(navItem => (
        <Text
          as={Link}
          key={navItem.link}
          to={navItem.link}
          h="full"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          fontWeight={300}
          flex={1}
          transition=".25s"
          color="text.base"
          _hover={{ bg: 'brandGray.100' }}
        >
          {navItem.label}
        </Text>
      ))}
    </Flex>
  );
};
