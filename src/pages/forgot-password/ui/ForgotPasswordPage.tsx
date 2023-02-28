import { Container } from '@chakra-ui/react';
import { ForgotPassword } from '@/features/auth/forgot-password';

const ForgotPasswordPage = () => {
  return (
    <Container
      display="flex"
      height="100vh"
      maxW="md"
      width="full"
      justifyContent="center"
      alignItems="center"
      as="section"
    >
      <ForgotPassword />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForgotPasswordPage;
