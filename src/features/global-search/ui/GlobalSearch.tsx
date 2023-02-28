import {
  Collapse,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { ChangeEvent, useCallback, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { SlClose } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { getOpen } from '@/features/global-search/model/selectors/getOpen/getOpen.selector';
import { globalSearchActions } from '@/features/global-search/model/slice/globalSearch.slice';

export const GlobalSearch = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();
  const isOpen = useSelector(getOpen);

  const handleClose = useCallback(() => {
    dispatch(globalSearchActions.setOpen(false));
  }, [dispatch]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value],
  );

  return (
    <Collapse in={isOpen} unmountOnExit>
      <Flex justify="space-between" gap={4} py="10px" align="center">
        <InputGroup>
          <InputLeftElement>
            <Icon as={CiSearch} />
          </InputLeftElement>
          <Input placeholder="Search" value={value} onChange={handleChange} />
        </InputGroup>

        <Icon
          cursor="pointer"
          as={SlClose}
          onClick={handleClose}
          fontSize="24px"
          color="text.base"
        />
      </Flex>
    </Collapse>
  );
};
