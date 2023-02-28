import { Flex, Icon } from '@chakra-ui/react';
import { useHeaderNavigation } from '@/widgets/layouts/publicLayout/lib/hooks/useHeaderNavigation';

export const Navigation = () => {
  const navigation = useHeaderNavigation();

  return (
    <Flex as="nav">
      {Object.entries(navigation).map(([key, value]) => (
        <Flex
          key={key}
          align="center"
          justify="center"
          h="50px"
          w="50px"
          borderRadius="6px"
          cursor="pointer"
          transition=".25s"
          _hover={{ bg: 'brandGray.100' }}
          color="text.base"
          onClick={value.onClick}
        >
          <Icon fontSize="24px" strokeWidth="1px" as={value.icon} />
        </Flex>
      ))}
    </Flex>
  );
};
