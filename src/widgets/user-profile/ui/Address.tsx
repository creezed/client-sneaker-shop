import { Box, Button, Fade, Heading } from '@chakra-ui/react';
import { useCallback } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { userAddressActions, UserAddressModal } from '@/features/user-address';

export const Address = () => {
  const dispatch = useDispatch();

  const handleOpen = useCallback(() => {
    dispatch(userAddressActions.setOpen(true));
  }, [dispatch]);

  return (
    <Box as={Fade} in>
      <Heading
        mt="6.4rem"
        mb="2rem"
        as="h3"
        color="text.heading"
        fontSize="24px"
        fontWeight={500}
      >
        Адреса
      </Heading>
      <Button
        w="full"
        size="lg"
        leftIcon={<AiOutlinePlus />}
        onClick={handleOpen}
        variant="solidGray"
        fontWeight={300}
      >
        Добавить адрес
      </Button>
      <UserAddressModal />
    </Box>
  );
};
