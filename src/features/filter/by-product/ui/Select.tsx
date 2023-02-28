import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getFilterSelect } from '@/features/filter/by-product/model/selectors/getFilterSelect/getFilterSelect.selector';
import { filterActions } from '@/features/filter/by-product/model/slice/filter.slice';
import { FilterSelectProps } from '@/features/filter/by-product/model/types/filter.type';

export const Select = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setOpen] = useState<boolean>(false);
  const filterSelectData = useSelector(getFilterSelect);
  const SELECT_KEY = filterSelectData.key;
  const searchParam = searchParams.get(SELECT_KEY);

  useEffect(() => {
    if (!searchParam) {
      dispatch(filterActions.setSelectLabel('Sort by'));
      return;
    }
    if (Object.keys(filterSelectData.items).includes(searchParam)) {
      const label = searchParam.charAt(0).toUpperCase() + searchParam.slice(1);
      dispatch(filterActions.setSelectLabel(label));
    }
  }, []);

  useEffect(() => {
    if (!searchParam) {
      return;
    }

    if (searchParam.split(',').length > 1) {
      searchParams.delete(SELECT_KEY);
      setSearchParams(searchParams);
    }

    if (!Object.keys(filterSelectData.items).includes(searchParam)) {
      searchParams.delete(SELECT_KEY);
      setSearchParams(searchParams);
    }
  }, [searchParams]);

  const handleChange = useCallback(
    (key: string, value: FilterSelectProps) => {
      if (searchParam === key) {
        return;
      }
      searchParams.set(SELECT_KEY, key);
      setSearchParams(searchParams);
      dispatch(filterActions.setSelectLabel(value.label));
    },
    [searchParams],
  );

  const handleClose = () => setOpen(false);

  return (
    <Menu onClose={handleClose}>
      <MenuButton
        maxW="250px"
        w="full"
        borderRadius="16px"
        bg="white"
        border="1px solid"
        borderColor={isOpen ? 'brand.600' : 'gray.50'}
        h="48px"
        px="16px"
        boxShadow="sm"
        cursor="pointer"
        onClick={() => setOpen(!isOpen)}
      >
        <Flex alignItems="center" justifyContent="space-between" w="full">
          <Text as="span">{filterSelectData.label}</Text>
          <Icon
            as={AiOutlineArrowDown}
            transition=".25s ease"
            color="gray.600"
            transform={isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'}
          />
        </Flex>
      </MenuButton>
      <MenuList>
        {Object.entries(filterSelectData.items).map(([key, value]) => (
          <MenuItem key={key} onClick={() => handleChange(key, value)}>
            {value.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
