import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { IoTrash } from 'react-icons/io5';

export const ProductCard = () => {
  return (
    <Flex
      borderRadius="20px"
      minH="120px"
      maxH="120px"
      w="full"
      overflow="hidden"
      justify="center"
      align="center"
      backgroundColor="white"
      border="1px solid"
      borderColor="gray.50"
      paddingX="20px"
    >
      <Flex justify="space-between" align="center" w="full">
        <Flex gap="20px" align="center">
          <Image
            w="120px"
            h="80px"
            objectFit="cover"
            objectPosition="center"
            src="https://superstep.ru/upload/resize_cache/photo/1476/NBCM997HCJ/800_800_1/NBCM997HCJ.01.jpg"
          />
          <Box>
            <Text
              noOfLines={1}
              lineHeight={1.5}
              fontSize="16px"
              color="text.base"
            >
              Мужские Кроссовки
            </Text>
            <Text
              noOfLines={1}
              lineHeight={1}
              color="text.base"
              fontSize="16px"
            >
              New Balance: 997
            </Text>
            <Text mt="8px" lineHeight={1} color="text.base" fontSize="16px">
              8 000 руб.
            </Text>
          </Box>
        </Flex>
        <Flex
          w="40px"
          h="40px"
          justify="center"
          align="center"
          backgroundColor="transparent"
          transition=".15s ease"
          userSelect="none"
          cursor="pointer"
          borderRadius="12px"
          _hover={{ bg: 'gray.50' }}
          _active={{ transform: 'scale(.92)' }}
        >
          <Icon as={IoTrash} color="gray.600" fontSize="22px" />
        </Flex>
      </Flex>
    </Flex>
  );
};
