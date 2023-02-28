import { Button, Flex, Input } from '@chakra-ui/react';

const AdminHomePage = () => {
  return (
    <Flex as="article" flexDir="column">
      <Flex as="header" gap={6}>
        <Input flexBasis="80%" />
        <Button flexBasis="20%">Create</Button>
      </Flex>
    </Flex>
  );
};

// eslint-disable-next-line import/no-default-export
export default AdminHomePage;
