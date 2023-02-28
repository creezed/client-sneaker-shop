import { Button, Flex, Icon, ScaleFade } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '@/shared/consts/route';
import { Taken } from '@/shared/ui/illustrations';

const NotFoundPage = () => {
  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      align="center"
      flexDirection="column"
      as="section"
    >
      <ScaleFade in unmountOnExit>
        <Flex flexDirection="column" align="center" gap={2} as="article">
          <Icon as={Taken} />
          <Button mt={4} size="lg" as={Link} to={AppRoutes.HOME}>
            Back to Homepage
          </Button>
        </Flex>
      </ScaleFade>
    </Flex>
  );
};

// eslint-disable-next-line import/no-default-export
export default NotFoundPage;
