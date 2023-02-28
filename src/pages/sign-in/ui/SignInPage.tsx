import { Container } from '@chakra-ui/react';
import { FC } from 'react';
import { LoginFormByEmail } from '@/features/auth/sign-in/by-email/ui/LoginFormByEmail';

const signInPage: FC = () => {
  return (
    <Container
      display="flex"
      height="100vh"
      width="full"
      justifyContent="center"
      alignItems="center"
      as="section"
    >
      <LoginFormByEmail />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default signInPage;
