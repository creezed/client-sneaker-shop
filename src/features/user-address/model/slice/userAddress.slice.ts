import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserAddressSchema } from '@/features/user-address/model/types/userAddress.type';

const initialState: UserAddressSchema = {
  isOpen: false,
};

export const userAddressSlice = createSlice({
  name: 'userAddress',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { actions: userAddressActions, reducer: userAddressReduces } =
  userAddressSlice;
