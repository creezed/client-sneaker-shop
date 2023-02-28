import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalSearchSchema } from '@/features/global-search/model/types/globalSearch.type';

const initialState: GlobalSearchSchema = {
  isOpen: false,
};

export const globalSearchSlice = createSlice({
  name: 'globalSearch',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { actions: globalSearchActions, reducer: globalSearchReducer } =
  globalSearchSlice;
