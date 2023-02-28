import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { basketActions, getOpen } from '@/entities/Cart';
import { ProductCard } from '@/entities/Cart/ui/ProductCard/ProductCard';

export const Cart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getOpen);

  const handleClose = () => {
    dispatch(basketActions.setOpen(false));
  };

  return (
    <Drawer onClose={handleClose} isOpen={isOpen} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Basket</DrawerHeader>
        <DrawerBody
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex as="article" flexDirection="column" gap={4} overflowY="auto">
            <ProductCard />
          </Flex>
          <Flex pt="12px" as="article" flexDirection="column" gap={2}>
            <Flex as="article" gap={1} w="full">
              <Text color="black">Итого</Text>
              <Box
                flexGrow={1}
                borderBottom="1px dashed"
                borderColor="gray.200"
                h="80%"
              />
              <Text color="black" fontWeight={500}>
                21 498 руб.
              </Text>
            </Flex>
            <Flex as="article" gap={1} w="full">
              <Text color="brand.600">Налог 5%:</Text>
              <Box
                flexGrow={1}
                borderBottom="1px dashed"
                borderColor="gray.200"
                h="80%"
              />
              <Text color="black" fontWeight={500}>
                1074 руб.
              </Text>
            </Flex>
            <Button mt="12px" size="lg" rightIcon={<AiOutlineArrowRight />}>
              Checkout
            </Button>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
