import { Container, Flex } from '@chakra-ui/react';
import { Header } from '@/pages/checkout/ui/header/Header';

const CheckoutPage = () => {
  return (
    <Container maxW="1440px" as="header">
      <Header />
      <Flex mt={4} justify="space-between" align="flex-start">
        <div>12</div>
        <div>12</div>
      </Flex>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default CheckoutPage;
