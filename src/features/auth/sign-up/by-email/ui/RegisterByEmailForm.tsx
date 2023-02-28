/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  Checkbox,
  CloseButton,
  Collapse,
  createStandaloneToast,
  Divider,
  Flex,
  FormControl,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  SlideFade,
  Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userActions } from '@/entities/User';
import { registerByEmailSchema } from '@/features/auth/sign-up/by-email/lib/validation/registerByEmail.schema';
import { registrationApi } from '@/features/auth/sign-up/by-email/model/api/registration.api';
import {
  RegisterParamsByEmail,
  RegistrationFormFields,
} from '@/features/auth/sign-up/by-email/model/types/registration.type';
import { AppRoutes } from '@/shared/consts/route';
import { errorCatch } from '@/shared/lib/utils/error-catch/error-catch';

const { toast } = createStandaloneToast();

export const RegisterByEmailForm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegistrationFormFields>({
    mode: 'onBlur',
    resolver: yupResolver(registerByEmailSchema),
  });

  const handlePasswordClick = () => setShowPassword(!showPassword);

  const onSubmit = async (data: RegisterParamsByEmail) => {
    try {
      setIsLoading(true);
      const response = await registrationApi(data);
      toast({
        title: 'Успех',
        description: 'Успешная регистрация',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      dispatch(userActions.setAuthData(response.data));
      dispatch(userActions.setIsAuth(true));
      setIsLoading(false);
      navigate(AppRoutes.LOGIN);
    } catch (e) {
      const errorMessage = errorCatch(e);
      toast({
        title: 'Ошибка',
        description: errorMessage,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      setIsLoading(false);
    }
  };

  return (
    <SlideFade in unmountOnExit offsetY={10}>
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexDirection="column"
        gap={4}
        alignItems="flex-start"
      >
        <CloseButton
          onClick={() => navigate(AppRoutes.LOGIN)}
          size="lg"
          mb="12px"
          ml="-12px"
        />
        <Heading fontWeight={400} color="text.heading">
          Регистрация
        </Heading>
        <Text as="p" fontSize={18} color="text.paragraph">
          Register for further ordering and tracking
        </Text>
        <FormControl isInvalid={!!errors.firstName}>
          <Input
            placeholder="Имя"
            size="lg"
            variant="solid"
            {...register('firstName')}
          />
          <Collapse in={Boolean(errors.firstName)} unmountOnExit>
            <Text color="error.fill">
              {errors.firstName && errors.firstName.message}
            </Text>
          </Collapse>
        </FormControl>

        <FormControl isInvalid={!!errors.lastName}>
          <Input
            placeholder="Фамилия"
            size="lg"
            variant="solid"
            {...register('lastName')}
          />
          <Collapse in={Boolean(errors.lastName)} unmountOnExit>
            <Text color="error.fill">
              {errors.lastName && errors.lastName.message}
            </Text>
          </Collapse>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <Input
            placeholder="Почта"
            size="lg"
            variant="solid"
            type="email"
            autoComplete="email"
            {...register('email')}
          />
          <Collapse in={Boolean(errors.email)} unmountOnExit>
            <Text color="error.fill">
              {errors.email && errors.email.message}
            </Text>
          </Collapse>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <InputGroup>
            <Input
              placeholder="Пароль"
              size="lg"
              variant="solid"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
            />
            <InputRightElement
              width="3rem"
              onClick={handlePasswordClick}
              color="gray.500"
              cursor="pointer"
              height="full"
              userSelect="none"
            >
              {showPassword ? (
                <Icon fontSize={18} as={AiOutlineEye} />
              ) : (
                <Icon fontSize={18} as={AiOutlineEyeInvisible} />
              )}
            </InputRightElement>
          </InputGroup>

          <Collapse in={Boolean(errors.password)} unmountOnExit>
            <Text color="error.fill">
              {errors.password && errors.password.message}
            </Text>
          </Collapse>
        </FormControl>

        <Checkbox
          size="lg"
          gap="10px"
          isInvalid={Boolean(errors.acceptTerms)}
          {...register('acceptTerms')}
        >
          I agree to the Terms and Conditions of data processing and processing
          Privacy Policy
        </Checkbox>
        <Button
          isLoading={isLoading}
          width="full"
          variant="solid"
          size="lg"
          type="submit"
        >
          Создать аккаунт
        </Button>
        <Divider width="full" />
        <Flex gap={2} justify="center" align="center" width="full">
          <Text fontSize={18}>Уже есть аккаунт?</Text>
          <Text as={Link} to={AppRoutes.LOGIN} fontSize={18} fontWeight={500}>
            Войти
          </Text>
        </Flex>
      </Flex>
    </SlideFade>
  );
};
