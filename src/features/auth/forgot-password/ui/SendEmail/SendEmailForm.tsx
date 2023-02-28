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
import { AiFillLock } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SendEmailSchema } from '@/features/auth/forgot-password/lib/validation/SendEmail.schema';
import { getEmail } from '@/features/auth/forgot-password/model/selectors/getEmail/getStep.selector';
import { forgotPasswordAction } from '@/features/auth/forgot-password/model/slice/forgotPassword.slice';
import { SendEmailParams } from '@/features/auth/forgot-password/model/types/SendEmailParams.type';
import { AppRoutes } from '@/shared/consts/route';

export const SendEmailForm = () => {
  const dispatch = useDispatch();
  const email = useSelector(getEmail);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SendEmailParams>({
    resolver: yupResolver(SendEmailSchema),
    mode: 'onBlur',
    defaultValues: {
      email: email,
    },
  });

  const onSubmit = (data: SendEmailParams) => {
    dispatch(forgotPasswordAction.setEmail(data.email));
    dispatch(forgotPasswordAction.setStep(1));
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      w="full"
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
        <Icon as={AiFillLock} />
      </Flex>
      <Heading mt={8} fontWeight={600} color="text.heading">
        Forgot password?
      </Heading>
      <Text mt={2} fontSize={20} align="center" color="text.paragraph">
        No worries, well send you reset instruction
      </Text>
      <FormControl isInvalid={!!errors.email} mt={8}>
        <Input
          placeholder="Email"
          size="lg"
          variant="solid"
          type="email"
          autoComplete="email"
          {...register('email')}
        />
        <Collapse in={Boolean(errors.email)} unmountOnExit>
          <Text color="error.fill">{errors.email && errors.email.message}</Text>
        </Collapse>
      </FormControl>
      <Button mt={4} w="full" size="lg" type="submit">
        Reset password
      </Button>
      <Flex mt={12} as={Link} to={AppRoutes.LOGIN} align="center" gap={2}>
        <Icon as={BsArrowLeft} color="text.paragraph" />
        <Text color="text.paragraph">Back to log in</Text>
      </Flex>
    </Flex>
  );
};
