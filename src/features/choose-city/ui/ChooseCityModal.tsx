import {
  Box,
  Flex,
  Grid,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCity } from '../model/selectors/getCurrentCity/getCurrentCity.selector';
import { getOpen } from '../model/selectors/getOpen/getOpen.selector';
import { chooseCityActions } from '../model/slice/chooseCity.slice';

const cities: string[] = [
  'Москва',
  'Санкт-Петербург',
  'Новосибирск',
  'Екатеринбург',
  'Казань',
  'Нижний Новгород',
  'Челябинск',
  'Красноярск',
  'Самара',
  'Уфа',
  'Ростов-на-Дону',
  'Омск',
  'Краснодар',
  'Воронеж',
  'Пермь',
  'Волгоград',
  'Саратов',
  'Тюмень',
  'Тольятти',
  'Барнаул',
  'Ижевск',
  'Хабаровск',
  'Ульяновск',
  'Иркутск',
  'Владивосток',
  'Ярославль',
  'Кемерово',
  'Томск',
  'Набережные Челны',
];

export const ChooseCityModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getOpen);
  const currentCity = useSelector(getCurrentCity);

  const handleOpen = useCallback(() => {
    dispatch(chooseCityActions.setOpen(true));
  }, [dispatch]);

  const handleClose = useCallback(() => {
    dispatch(chooseCityActions.setOpen(false));
  }, [dispatch]);

  const handleApply = useCallback(
    (city: string) => {
      if (!city) {
        return;
      }
      dispatch(chooseCityActions.setCurrentCity(city));
      handleClose();
    },
    [dispatch],
  );

  return (
    <>
      <Flex
        as="button"
        onClick={handleOpen}
        gap={2}
        alignItems="center"
        cursor="pointer"
        color="text.base"
      >
        <Icon fontSize="18px" fontWeight={300} as={IoLocationOutline} />
        <Text fontWeight={300} fontSize="18px">
          {currentCity}
        </Text>
      </Flex>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose your city!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <InputLeftElement>
                <Icon as={CiSearch} />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup>
            <Grid
              my="12px"
              templateColumns="1fr 1fr"
              as="ul"
              gap={2}
              maxH="240px"
              overflowY="auto"
              h="full"
            >
              {cities.map(city => (
                <Box
                  key={city}
                  h="40px"
                  cursor="pointer"
                  width="full"
                  display="flex"
                  alignItems="center"
                  pl="14px"
                  as="li"
                  borderRadius="8px"
                  transition=".25s ease"
                  bg={city === currentCity ? 'brand.400' : 'transparent'}
                  color={city === currentCity ? 'white' : 'text.base'}
                  _hover={{
                    bg: city === currentCity ? 'brand.600' : 'gray.50',
                  }}
                  onClick={() => handleApply(city)}
                >
                  <Text pointerEvents="none">{city}</Text>
                </Box>
              ))}
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
