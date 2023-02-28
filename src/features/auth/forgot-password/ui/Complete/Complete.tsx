import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AppRoutes } from '@/shared/consts/route';

export const Complete = () => {
  return (
    <Flex as="article" flexDir="column" align="center">
      <Flex
        justify="center"
        align="center"
        w="50px"
        h="50px"
        borderRadius="50%"
        bg="green.300"
        color="white"
        fontSize={24}
      >
        <Icon as={AiOutlineCheck} />
      </Flex>
      <Heading mt={4} fontWeight={600} color="text.heading">
        Password reset
      </Heading>
      <Text align="center" mt={2} fontSize={18} color="text.paragraph">
        Your password has been successfully reset.
      </Text>
      <Text align="center" fontSize={18} color="text.paragraph">
        Click below to log in magically
      </Text>
      <Flex mt={8} as={Link} to={AppRoutes.LOGIN} align="center" gap={2}>
        <Icon as={BsArrowLeft} color="text.paragraph" />
        <Text color="text.paragraph">Back to log in</Text>
      </Flex>
    </Flex>
  );
};
