import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '@/shared/consts/route';

export const HomeSaleBanner = () => {
  return (
    <Flex
      as={Link}
      to={`${AppRoutes.PRODUCTS}?sale=sale`}
      w="full"
      h="240px"
      bg="brand.500"
      mb={20}
      justify="center"
      align="center"
      borderRadius="16px"
      transition=".25s ease"
      _hover={{ bg: 'brand.700' }}
    >
      <Heading textTransform="uppercase" color="white">
        Sale
      </Heading>
    </Flex>
  );
};
