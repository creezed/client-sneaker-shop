import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAddressActions } from '../model/slice/userAddress.slice';
import { getOpen } from '@/features/user-address/model/selectors/userAddress.selectors';
import { DadataInput } from '@/shared/ui/dadataInput/DadataInput';

export const UserAddressModal = () => {
  const isOpen = useSelector(getOpen);
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(userAddressActions.setOpen(false));
  }, [dispatch]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          w="full"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          padding="22px"
        >
          <Text textAlign="center" as="span" my={4}>
            Новый адрес
          </Text>
          <Text as="span" mb="8px" fontSize="14px">
            Город, улица, дом, корпус, строение, квартира
          </Text>
          <DadataInput placeholder="Введите адрес" />
          <Text as="span" mt={1} fontSize="12px" color="text.gray">
            Выберите из выпадающего списка
          </Text>
          <Button mt={4} variant="solidBlack">
            Сохранить
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
