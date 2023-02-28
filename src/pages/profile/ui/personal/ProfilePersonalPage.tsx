import { UserAddress, UserPersonalInformation } from '@/widgets/user-profile';

const ProfilePersonalPage = () => {
  return (
    <>
      <UserPersonalInformation />
      <UserAddress />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ProfilePersonalPage;
