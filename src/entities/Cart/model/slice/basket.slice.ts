import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketSchema } from '@/entities/Cart/model/types/basket.type';

const initialState: BasketSchema = {
  isOpen: false,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { reducer: basketReducer } = basketSlice;
export const { actions: basketActions } = basketSlice;
