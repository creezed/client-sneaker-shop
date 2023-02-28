import { Flex } from '@chakra-ui/react';
import { ChooseCityModal } from '@/features/choose-city';

export const AdminHeader = () => {
  return (
    <Flex
      as="header"
      alignItems="center"
      h="full"
      w="full"
      justifyContent="flex-end"
      gridArea="header"
      px={6}
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <ChooseCityModal />
    </Flex>
  );
};
