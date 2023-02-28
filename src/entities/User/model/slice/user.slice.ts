import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '@/entities/User/model/types/user.types';

const initialState: UserSchema = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User | undefined>) {
      state.data = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
