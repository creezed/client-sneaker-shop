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
import { loginByEmailSchema } from '@/features/auth/sign-in/by-email/lib/validation/loginByEmail.schema';
import { loginApi } from '@/features/auth/sign-in/by-email/model/api/login.api';
import { LoginParamsByEmail } from '@/features/auth/sign-in/by-email/model/types/login.type';
import { AppRoutes } from '@/shared/consts/route';
import { errorCatch } from '@/shared/lib/utils/error-catch/error-catch';

const { toast } = createStandaloneToast();

export const LoginFormByEmail = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginIsLoading, setLoginLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginParamsByEmail>({
    mode: 'onBlur',
    resolver: yupResolver(loginByEmailSchema),
  });

  const handlePasswordClick = () => setShowPassword(!showPassword);

  const onSubmit = async (data: LoginParamsByEmail) => {
    try {
      setLoginLoading(true);
      const response = await loginApi(data);
      setLoginLoading(false);

      toast({
        title: 'Успех',
        description: 'Успешная авторизация',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      dispatch(userActions.setAuthData(response.data));
      dispatch(userActions.setIsAuth(true));
      navigate(AppRoutes.PROFILE_PERSONAL);
    } catch (err) {
      const errorMessage = errorCatch(err);
      setTimeout(() => setLoginLoading(false), 300);
      toast({
        title: 'Ошибка',
        description: errorMessage,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  return (
    <SlideFade in unmountOnExit offsetY={10}>
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexDirection="column"
        gap="20px"
        alignItems="flex-start"
      >
        <CloseButton
          onClick={() => navigate(AppRoutes.HOME)}
          size="lg"
          mb="12px"
          ml="-12px"
        />
        <Heading fontWeight={400} color="text.heading">
          Добро пожаловать!
        </Heading>
        <Text as="p" fontSize={18} color="text.paragraph">
          Sign in to an existing account to further checkout and track your
          order
        </Text>
        <FormControl isInvalid={Boolean(errors.email)}>
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

        <FormControl isInvalid={Boolean(errors.password)}>
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

        <Flex mt="4px" justify="space-between" width="full">
          <Checkbox size="lg" gap="10px" {...register('remember')}>
            Запомнить меня
          </Checkbox>
          <Text
            as={Link}
            to={AppRoutes.FORGOT_PASSWORD}
            fontSize={18}
            fontWeight={500}
          >
            Забыли пароль?
          </Text>
        </Flex>
        <Button
          isLoading={loginIsLoading}
          width="full"
          variant="solid"
          size="lg"
          type="submit"
        >
          Войти
        </Button>
        <Divider width="full" />
        <Flex gap={2} justify="center" align="center" width="full">
          <Text fontSize={18}>Ещё не зарегистрировались?</Text>
          <Text
            as={Link}
            to={AppRoutes.REGISTRATION}
            fontSize={18}
            fontWeight={500}
          >
            Создать аккаунт
          </Text>
        </Flex>
      </Flex>
    </SlideFade>
  );
};
