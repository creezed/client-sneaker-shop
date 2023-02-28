import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const ProductCardOrder = () => {
  return (
    <Flex
      h="180px"
      w="full"
      overflow="hidden"
      justify="center"
      align="center"
      backgroundColor="white"
      padding="16px"
    >
      <Flex justify="space-between" align="center" w="full">
        <Flex gap="20px" align="center">
          <Image
            w="180px"
            h="160px"
            objectFit="cover"
            objectPosition="center"
            src="https://superstep.ru/upload/resize_cache/photo/1476/NBCM997HCJ/800_800_1/NBCM997HCJ.01.jpg"
          />
          <Box>
            <Text
              noOfLines={1}
              lineHeight={1.5}
              fontSize="18px"
              color="text.base"
            >
              Мужские Кроссовки
            </Text>
            <Text
              noOfLines={1}
              lineHeight={1}
              color="text.base"
              fontSize="18px"
            >
              New Balance: 997
            </Text>
            <Text mt="8px" lineHeight={1} color="text.base" fontSize="18px">
              8 000 руб.
            </Text>
          </Box>
        </Flex>
        <Flex
          align="center"
          gap={2}
          color="text.base"
          as={Link}
          fontWeight={300}
          to="?product=13"
          cursor="pointer"
        >
          <Text fontSize="18px">Detail</Text>
          <Icon as={AiOutlineArrowRight} strokeWidth="1px" />
        </Flex>
      </Flex>
    </Flex>
  );
};
