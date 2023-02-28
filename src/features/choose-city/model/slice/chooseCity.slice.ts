import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChooseCitySchema } from '@/features/choose-city/model/types/chooseCity.type';

const initialState: ChooseCitySchema = {
  modalIsOpen: false,
  currentCity: 'Moscow',
};

export const chooseCitySlice = createSlice({
  name: 'choose-city',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload;
    },
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
  },
});

export const { actions: chooseCityActions } = chooseCitySlice;
export const { reducer: chooseCityReducer } = chooseCitySlice;
