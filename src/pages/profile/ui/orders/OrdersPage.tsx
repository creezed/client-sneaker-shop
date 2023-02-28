import { Card, Divider, Heading, ScaleFade } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ViewOrderDetailsModel } from '@/entities/Order';
import { ProductCardOrder } from '@/entities/Product';

const OrdersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productIsOpen, setProductOpen] = useState<boolean>(false);

  useEffect(() => {
    if (searchParams.get('product')) {
      setProductOpen(true);
    } else {
      setProductOpen(false);
    }
  }, [searchParams]);

  const handleCloseModal = () => {
    setSearchParams('');
  };

  return (
    <Card padding="30px" borderRadius="20px" as={ScaleFade} in>
      <Heading
        mb="2.5rem"
        as="h3"
        color="text.heading"
        fontSize="28px"
        fontWeight={500}
      >
        My orders
      </Heading>
      <ProductCardOrder />
      <Divider borderRadius="2px" color="gray.100" />
      <ProductCardOrder />
      <ViewOrderDetailsModel
        isOpen={productIsOpen}
        onClose={handleCloseModal}
      />
    </Card>
  );
};

// eslint-disable-next-line import/no-default-export
export default OrdersPage;
