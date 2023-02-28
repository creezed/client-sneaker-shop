import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterKey, FilterSelectKey } from '../types/filter.type';
import { FilterSchema } from '../types/filterSchema.type';

const initialState: FilterSchema = {
  status: 'init',
  select: {
    key: 'sort',
    label: 'Sort by',
    items: {
      [FilterSelectKey.CHEAPEST]: {
        label: 'Cheapest',
      },
      [FilterSelectKey.EXPENSIVE]: {
        label: 'Expensive',
      },
      [FilterSelectKey.POPULAR]: {
        label: 'Popular',
      },
    },
  },
  items: {
    [FilterKey.GENDER]: {
      label: 'Gender',
      items: [
        { label: 'Men', id: 1, value: 'male' },
        { label: 'Women', id: 2, value: 'female' },
      ],
    },
    [FilterKey.SIZE]: {
      label: 'Size',
      items: [
        { label: '43', id: 1, value: '43' },
        { label: '41', id: 2, value: '41' },
      ],
    },
    [FilterKey.BRAND]: {
      label: 'Brands',
      items: [
        { label: 'Adidas', id: 1, value: 'adidas' },
        { label: 'Nike', id: 2, value: 'nike' },
      ],
    },
    [FilterKey.AGE]: {
      label: 'Age',
      items: [
        { label: 'Adults', id: 1, value: 'adults' },
        { label: 'Children', id: 2, value: 'children' },
      ],
    },
    [FilterKey.SALE]: {
      label: 'Items on sale',
      items: [{ label: 'Sale', id: 1, value: 'sale' }],
    },
  },
};

export const filterSlice = createSlice({
  name: 'filter/product',
  initialState,
  reducers: {
    getFilter: state => {
      return state;
    },
    setSelectLabel: (state, action: PayloadAction<string>) => {
      state.select.label = action.payload;
    },
  },
});

export const { actions: filterActions, reducer: filterReducer } = filterSlice;
