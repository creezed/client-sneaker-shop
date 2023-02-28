import { Box, Fade, Heading } from '@chakra-ui/react';
import { ProfileForm } from '@/features/profile/by-user';

export const PersonalInformation = () => {
  return (
    <Box as={Fade} in>
      <Heading
        mb="2rem"
        as="h3"
        color="text.heading"
        fontSize="24px"
        fontWeight={500}
      >
        Мои данные
      </Heading>
      <ProfileForm />
    </Box>
  );
};
