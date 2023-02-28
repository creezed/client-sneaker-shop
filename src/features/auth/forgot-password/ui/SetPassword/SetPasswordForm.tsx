/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  Collapse,
  Flex,
  FormControl,
  Heading,
  Icon,
  Input,
  Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AiFillUnlock } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SetPasswordSchema } from '@/features/auth/forgot-password/lib/validation/SetPassword.schema';
import { forgotPasswordAction } from '@/features/auth/forgot-password/model/slice/forgotPassword.slice';
import { SetPassword } from '@/features/auth/forgot-password/model/types/SetPasswordParams';
import { AppRoutes } from '@/shared/consts/route';

export const SetPasswordForm = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SetPassword>({
    mode: 'onBlur',
    resolver: yupResolver(SetPasswordSchema),
  });

  const onSubmit = (data: SetPassword) => {
    console.log(data);
    dispatch(forgotPasswordAction.setStep(3));
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      flexDir="column"
      align="center"
    >
      <Flex
        justify="center"
        align="center"
        w="50px"
        h="50px"
        borderRadius="50%"
        bg="brand.400"
        color="white"
        fontSize={24}
      >
        <Icon as={AiFillUnlock} />
      </Flex>
      <Heading mt={8} fontWeight={600} color="text.heading">
        Set new password
      </Heading>
      <Text align="center" mt={2} fontSize={18} color="text.paragraph">
        Your new password must be different to previosly used passwords
      </Text>
      <FormControl mt={5} isInvalid={!!errors.password}>
        <Input
          placeholder="Password"
          size="lg"
          variant="solid"
          {...register('password')}
        />
        <Collapse in={Boolean(errors.password)} unmountOnExit>
          <Text color="error.fill">
            {errors.password && errors.password.message}
          </Text>
        </Collapse>
      </FormControl>
      <FormControl mt={4} isInvalid={!!errors.confirmPassword}>
        <Input
          placeholder="Confirm Password"
          size="lg"
          variant="solid"
          {...register('confirmPassword')}
        />
        <Collapse in={Boolean(errors.confirmPassword)} unmountOnExit>
          <Text color="error.fill">
            {errors.confirmPassword && errors.confirmPassword.message}
          </Text>
        </Collapse>
      </FormControl>
      <Button mt={6} size="lg" type="submit" w="full">
        Reset password
      </Button>
      <Flex mt={12} as={Link} to={AppRoutes.LOGIN} align="center" gap={2}>
        <Icon as={BsArrowLeft} color="text.paragraph" />
        <Text color="text.paragraph">Back to log in</Text>
      </Flex>
    </Flex>
  );
};
