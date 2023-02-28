import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const HomeMainBanner = () => {
  return (
    <Flex
      m={8}
      w="full"
      h="70vh"
      p="24px"
      borderRadius="20px"
      bg="white"
      justify="center"
      gap={20}
      align="center"
      overflow="hidden"
    >
      <Image
        w="600px"
        objectFit="cover"
        objectPosition="center"
        src="https://superstep.ru/upload/resize_cache/photo/1476/ADH04269R00/1476_1476_1/ADH04269R00.01.jpg"
      />
      <Box maxW="416px">
        <Heading>Женские кроссовки:</Heading>
        <Heading>Adidas ozelia</Heading>
        <Text mt={2} color="text.base">
          Возможно, ты далек от 90-х, но Ozelia пришли именно из той эпохи ярких
          экспериментов. Вдохновленные архивными моделями adidas, эти массивные
          кроссовки созданы привлекать внимание.
        </Text>
        <Button
          mt={4}
          size="lg"
          maxW="200px"
          w="full"
          rightIcon={<AiOutlineArrowRight />}
        >
          Посмотреть
        </Button>
      </Box>
    </Flex>
  );
};
