import { Container } from '@chakra-ui/react';
import { FC } from 'react';
import { RegisterByEmailForm } from '@/features/auth/sign-up/by-email';

const SignInPage: FC = () => {
  return (
    <Container
      display="flex"
      height="100vh"
      width="full"
      justifyContent="center"
      alignItems="center"
      as="section"
    >
      <RegisterByEmailForm />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default SignInPage;
