import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useProfileNavigation } from '@/widgets/layouts/profileLayout/lib/hooks/useProfileNavigation';

export const Navigation = () => {
  const navigation = useProfileNavigation();
  const location = useLocation();
  return (
    <Flex flexDirection="column" gap={2}>
      <Heading
        as="h4"
        color="text.heading"
        fontSize="16px"
        fontWeight={400}
        px="16px"
      >
        Меню
      </Heading>

      <Flex
        flexDirection="column"
        bg="transparent"
        as="ul"
        overflow="hidden"
        gap={1}
      >
        {Object.entries(navigation).map(([key, navItem]) => (
          <Flex
            key={key}
            px="16px"
            h="48px"
            w="full"
            as="li"
            borderRadius="8px"
            cursor="pointer"
            transition=".15s"
            bg={
              navItem.path === location.pathname
                ? 'brandGray.100'
                : 'transparent'
            }
            _hover={{
              bg:
                navItem.path === location.pathname
                  ? 'brandGray.200'
                  : 'brandGray.100',
            }}
            _active={{
              bg:
                navItem.path === location.pathname
                  ? 'brandGray.300'
                  : 'brandGray.200',
            }}
            onClick={navItem.onClick}
          >
            <Flex w="full" align="center" gap={3}>
              <Icon as={navItem.icon} fontSize="16px" />
              <Text>{navItem.label}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
