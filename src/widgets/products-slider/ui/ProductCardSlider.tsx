import 'swiper/swiper-bundle.min.css';
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { SwiperOptions } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { ProductCard } from '@/entities/Product/ui/Card/ProductCard';
import { useNavigationSwiper } from '@/shared/lib/hooks/useNavigationSwiper';

const breakpoints: {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
} = {
  400: {
    slidesPerView: 1.5,
  },
  500: {
    slidesPerView: 2,
  },
  760: {
    slidesPerView: 2.8,
    spaceBetween: 20,
  },
  860: {
    slidesPerView: 3.5,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4.2,
    spaceBetween: 30,
  },
  1400: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};

export const ProductCardSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [handlePrev, handleNext] = useNavigationSwiper(swiperRef);
  return (
    <Box as="article" mb={20}>
      <Flex mb={6} as="header" justify="space-between" align="center" w="full">
        <Heading fontSize="24px" color="text.heading" fontWeight={300}>
          Новые поступления
        </Heading>
        <Flex align="center" gap={2} cursor="pointer">
          <Text fontSize="16px" color="text.brand" fontWeight={300}>
            See all
          </Text>
          <Icon as={AiOutlineArrowRight} color="text.brand" />
        </Flex>
      </Flex>
      <Box position="relative">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={30}
          grabCursor
          breakpoints={breakpoints}
          ref={swiperRef}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index} style={{ padding: '5px' }}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
        <Flex
          onClick={handlePrev}
          align="center"
          justify="center"
          w="60px"
          h="60px"
          backgroundColor="white"
          borderRadius="50%"
          boxShadow="lg"
          position="absolute"
          top="50%"
          left="-2%"
          transform="translateY(-50%)"
          zIndex="banner"
          cursor="pointer"
          userSelect="none"
          transition=".1s ease-in-out"
          _hover={{ transform: 'scale(1.05) translateY(-50%)' }}
          _active={{ transform: 'scale(.9) translateY(-50%)' }}
        >
          <Icon as={AiOutlineArrowLeft} />
        </Flex>
        <Flex
          onClick={handleNext}
          align="center"
          justify="center"
          w="60px"
          h="60px"
          backgroundColor="white"
          borderRadius="50%"
          boxShadow="lg"
          position="absolute"
          top="50%"
          right="-2%"
          transform="translateY(-50%)"
          zIndex="banner"
          cursor="pointer"
          userSelect="none"
          transition=".1s ease-in-out"
          _hover={{ transform: 'scale(1.05) translateY(-50%)' }}
          _active={{ transform: 'scale(.9) translateY(-50%)' }}
        >
          <Icon as={AiOutlineArrowRight} />
        </Flex>
      </Box>
    </Box>
  );
};
