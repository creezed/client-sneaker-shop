import { Flex, Icon } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/shared/consts/route';
import { Logo } from '@/shared/ui/logo';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Flex justify="space-between" alignItems="center" h="68px">
      <Flex
        onClick={() => navigate(AppRoutes.HOME)}
        w="50px"
        h="50px"
        justify="center"
        align="center"
        borderRadius="6px"
        cursor="pointer"
        transition=".25s"
        _hover={{ bg: 'brandGray.100' }}
      >
        <Icon as={HiArrowLeft} fontSize="20px" />
      </Flex>
      <Logo link={AppRoutes.HOME} align="center" />
      <Flex
        onClick={() => navigate(AppRoutes.PROFILE_PERSONAL)}
        w="50px"
        h="50px"
        justify="center"
        align="center"
        borderRadius="6px"
        cursor="pointer"
        transition=".25s"
        _hover={{ bg: 'brandGray.100' }}
      >
        <Icon as={FaUserCircle} fontSize="20px" />
      </Flex>
    </Flex>
  );
};
