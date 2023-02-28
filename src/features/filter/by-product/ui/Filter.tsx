import { Box, Card, Checkbox, Flex, Switch, Text } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { FilterItem, FilterKey } from '../model/types/filter.type';
import { getFilter } from '@/features/filter/by-product/model/selectors/getFilter/getFilter.selector';
import { Select } from '@/features/filter/by-product/ui/Select';

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterData = useSelector(getFilter);

  const getChecked = useCallback(
    (key: string, item: FilterItem): boolean => {
      const searchParamsByKey = searchParams.get(key);

      if (!searchParamsByKey) {
        return false;
      }

      return searchParamsByKey.split(',').includes(item.value);
    },
    [searchParams],
  );

  const handleChangeChecked = useCallback(
    (filterCategory: string, currentItem: FilterItem) => {
      const searchParamsByKey = searchParams.get(filterCategory);

      const isChecked = getChecked(filterCategory, currentItem);

      if (!searchParamsByKey) {
        searchParams.set(filterCategory, currentItem.value);
        setSearchParams(searchParams);
        return;
      }

      const params = searchParamsByKey.split(',');

      if (!isChecked) {
        params.push(currentItem.value);
        searchParams.set(filterCategory, params.join(','));
        setSearchParams(searchParams);
        return;
      }

      params.splice(params.indexOf(currentItem.value), 1);
      const searchParamsIsEmpty = !params.join('');

      if (searchParamsIsEmpty) {
        searchParams.delete(filterCategory);
        setSearchParams(searchParams);
        return;
      }

      searchParams.set(filterCategory, params.join(','));
      setSearchParams(searchParams);
    },
    [searchParams],
  );

  return (
    <Card padding="30px" borderRadius="20px">
      <Flex as="article" flexDir="column" gap={4}>
        {Object.entries(filterData).map(([key, value]) => {
          if (key === FilterKey.SALE) {
            return (
              <Box as="article" key={key}>
                <Text fontWeight={500} color="text.base" mb="6px">
                  {value.label}
                </Text>
                {value.items &&
                  value.items.map(item => (
                    <Switch
                      key={item.id}
                      isChecked={getChecked(key, item)}
                      onChange={() => handleChangeChecked(key, item)}
                    />
                  ))}
              </Box>
            );
          }

          return (
            <Box as="article" key={key}>
              <Text fontWeight={500} color="text.base" mb="6px">
                {value.label}
              </Text>
              {value.items && (
                <Flex flexDirection="column" gap={2}>
                  {value.items.map(item => (
                    <Checkbox
                      key={item.id}
                      variant="filter"
                      fontSize="14px"
                      value={item.value}
                      onChange={() => handleChangeChecked(key, item)}
                      isChecked={getChecked(key, item)}
                    >
                      {item.label}
                    </Checkbox>
                  ))}
                </Flex>
              )}
            </Box>
          );
        })}
      </Flex>
    </Card>
  );
};

Filter.Select = Select;
