import { Flex, Grid, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { Filter } from '@/features/filter/by-product';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();

  console.log(Object.fromEntries(searchParams));

  return (
    <Grid gridTemplateColumns="1fr 5fr" gap={10} mt={10}>
      <Filter />
      <Flex as="section" flexDirection="column" gap={2} alignItems="flex-start">
        <Filter.Select />
        <Text>content</Text>
      </Flex>
    </Grid>
  );
};

// eslint-disable-next-line import/no-default-export
export default ProductsPage;
