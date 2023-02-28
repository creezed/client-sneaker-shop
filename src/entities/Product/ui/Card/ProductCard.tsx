import { Card, CardBody, Flex, Image, Skeleton, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface ProductCardProps {
  isLoading?: boolean;
  isSale?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
  isSale = false,
  isLoading = false,
}) => {
  return (
    <Card w="260px" h="280px" borderRadius="16px">
      <CardBody>
        <Skeleton isLoaded={!isLoading} borderRadius="lg" fadeDuration={1}>
          <Image
            maxW="full"
            w="full"
            objectFit="cover"
            objectPosition="center"
            h="120px"
            src="https://superstep.ru/upload/resize_cache/photo/1476/NBCM997HCJ/800_800_1/NBCM997HCJ.01.jpg"
          />
        </Skeleton>

        <Skeleton isLoaded={!isLoading} fadeDuration={1} h="24px">
          <Text mt="16px" noOfLines={1} lineHeight={1.5} color="text.base">
            Мужские Кроссовки
          </Text>
        </Skeleton>

        <Skeleton isLoaded={!isLoading} fadeDuration={1.2} h="16px">
          <Text mt="2px" noOfLines={1} lineHeight={1} color="text.base">
            New Balance: 997
          </Text>
        </Skeleton>

        <Skeleton isLoaded={!isLoading} fadeDuration={1.4} h="12px">
          <Text
            mt="14px"
            textTransform="uppercase"
            fontSize="12px"
            lineHeight={1}
            color="text.gray"
          >
            цена:
          </Text>
        </Skeleton>

        {isSale && !isLoading ? (
          <Flex align="center" gap={2}>
            <Text
              mt="6px"
              fontSize="14px"
              lineHeight={1}
              color="text.base"
              fontWeight={700}
            >
              8 000 руб.
            </Text>
            <Text
              position="relative"
              mt="6px"
              fontSize="14px"
              lineHeight={1}
              userSelect="none"
              color="text.gray"
              _after={{
                content: `""`,
                position: 'absolute',
                left: '50%',
                top: '50%',
                display: 'block',
                w: 'full',
                transform: 'translate(-50%, -50%)',
                h: '1px',
                bg: 'brand.600',
              }}
            >
              13 000 руб.
            </Text>
          </Flex>
        ) : (
          <Skeleton isLoaded={!isLoading} fadeDuration={1.5} h="14px">
            <Text
              mt="6px"
              fontWeight={700}
              fontSize="14px"
              lineHeight={1}
              color="text.base"
            >
              13 000 руб.
            </Text>
          </Skeleton>
        )}
      </CardBody>
    </Card>
  );
};
