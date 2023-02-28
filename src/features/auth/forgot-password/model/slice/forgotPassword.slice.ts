import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ForgotPasswordSchema } from '@/features/auth/forgot-password/model/types/ForgotPassword.types';

const initialState: ForgotPasswordSchema = {
  email: '',
  step: 1,
};

export const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { reducer: forgotPasswordReducer } = forgotPasswordSlice;
export const { actions: forgotPasswordAction } = forgotPasswordSlice;
