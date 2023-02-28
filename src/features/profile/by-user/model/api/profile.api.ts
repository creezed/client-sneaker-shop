import { User } from '@/entities/User';
import { ProfileUpdateParams } from '@/features/profile/by-user/model/types/profile.type';
import { rtkApi } from '@/shared/api/rtkApi';

export const profileApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getProfile: build.query<User, void>({
      query: () => `/api/v1/user/profile`,
    }),
    updateProfile: build.mutation<User, { body: ProfileUpdateParams }>({
      query: ({ body }) => ({
        url: `/api/v1/user/profile/update`,
        method: 'PATCH',
        body,
      }),
    }),
  }),
});
