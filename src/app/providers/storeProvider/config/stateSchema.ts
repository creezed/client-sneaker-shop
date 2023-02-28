import { BasketSchema } from '@/entities/Cart';
import { UserSchema } from '@/entities/User/model/types/user.types';
import { ForgotPasswordSchema } from '@/features/auth/forgot-password/model/types/ForgotPassword.types';
import { ChooseCitySchema } from '@/features/choose-city';
import { FilterSchema } from '@/features/filter/by-product';
import { GlobalSearchSchema } from '@/features/global-search';
import { UserAddressSchema } from '@/features/user-address';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  user: UserSchema;
  basket: BasketSchema;
  chooseCity: ChooseCitySchema;
  globalSearch: GlobalSearchSchema;
  forgotPassword: ForgotPasswordSchema;
  filter: FilterSchema;
  userAddress: UserAddressSchema;

  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
