/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  PinInput,
  PinInputField,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { BsArrowLeft } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmail } from '@/features/auth/forgot-password/model/selectors/getEmail/getStep.selector';
import { forgotPasswordAction } from '@/features/auth/forgot-password/model/slice/forgotPassword.slice';
import { CheckEmailCode } from '@/features/auth/forgot-password/model/types/CheckEmailCode.type';
import { AppRoutes } from '@/shared/consts/route';

export const CheckEmailForm = () => {
  const email = useSelector(getEmail);
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm<CheckEmailCode>({
    mode: 'onBlur',
  });

  const onSubmit = (data: CheckEmailCode) => {
    console.log(data);
    dispatch(forgotPasswordAction.setStep(2));
  };

  return (
    <Flex
      as="form"
      align="center"
      flexDirection="column"
      w="full"
      onSubmit={handleSubmit(onSubmit)}
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
        <Icon as={HiOutlineMail} />
      </Flex>
      <Heading mt={8} fontWeight={600} color="text.heading">
        Check your email
      </Heading>
      <Text mt={2} fontSize={18} color="text.paragraph">
        We sent a password reset code
      </Text>
      <Text fontSize={18} fontWeight={500} color="text.paragraph">
        {email}
      </Text>

      <HStack mt={5}>
        <PinInput otp size="lg">
          <PinInputField
            {...register('first', { required: true })}
            _focusVisible={{
              boxShadow: '0 0 0 2px rgba(232,52,69,0.4)',
              borderColor: 'transparent',
            }}
          />
          <PinInputField
            {...register('second', { required: true })}
            _focusVisible={{
              boxShadow: '0 0 0 2px rgba(232,52,69,0.4)',
              borderColor: 'transparent',
            }}
          />
          <PinInputField
            {...register('third', { required: true })}
            _focusVisible={{
              boxShadow: '0 0 0 2px rgba(232,52,69,0.4)',
              borderColor: 'transparent',
            }}
          />
          <PinInputField
            {...register('fourth', { required: true })}
            _focusVisible={{
              boxShadow: '0 0 0 2px rgba(232,52,69,0.4)',
              borderColor: 'transparent',
            }}
          />
          <PinInputField
            {...register('fifth', { required: true })}
            _focusVisible={{
              boxShadow: '0 0 0 2px rgba(232,52,69,0.4)',
              borderColor: 'transparent',
            }}
          />
        </PinInput>
      </HStack>

      <Button mt={6} size="lg" w="full" type="submit">
        Submit
      </Button>
      <Flex mt={4} gap={2} align="center">
        <Text color="text.paragraph">Didnt receive the email?</Text>
        <Text
          color="brand.400"
          cursor="pointer"
          _hover={{ textDecor: 'underline' }}
        >
          Click to resend
        </Text>
      </Flex>
      <Flex mt={12} as={Link} to={AppRoutes.LOGIN} align="center" gap={2}>
        <Icon as={BsArrowLeft} color="text.paragraph" />
        <Text color="text.paragraph">Back to log in</Text>
      </Flex>
    </Flex>
  );
};
