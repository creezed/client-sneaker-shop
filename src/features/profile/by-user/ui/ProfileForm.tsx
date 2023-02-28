/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  Collapse,
  createStandaloneToast,
  FormControl,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Gender } from '@/entities/User/model/types/user.types';
import { ChangeUserDataSchema } from '@/features/profile/by-user/lib/validation/ChangeUserData.schema';
import { profileApi } from '@/features/profile/by-user/model/api/profile.api';
import { Profile } from '@/features/profile/by-user/model/types/profile.type';

const { toast } = createStandaloneToast();
export const ProfileForm = () => {
  const { data, isLoading } = profileApi.useGetProfileQuery();
  const [updateProfile, { isLoading: updateProfileLoading }] =
    profileApi.useUpdateProfileMutation();

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<Profile>({
    mode: 'onBlur',
    resolver: yupResolver(ChangeUserDataSchema),
  });

  useEffect(() => {
    if (data) {
      reset({
        gender: data?.gender,
        firstName: data.firstName,
        lastName: data.lastName,
        birthday: data?.birthday,
      });
    }
  }, [reset, data]);

  const onSubmit = async (updateParams: Profile) => {
    await updateProfile({
      body: {
        ...updateParams,
        birthday: updateParams.birthday.toISOString(),
      },
    });
    toast({
      title: 'Успех',
      description: 'Данные успешно обновлены',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid
          as="form"
          gridTemplateColumns="1fr 1fr"
          gap="20px"
          alignItems="flex-start"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box>
            <Text mb="6px">Имя</Text>
            <FormControl isInvalid={Boolean(errors.firstName)}>
              <Input size="lg" variant="solid" {...register('firstName')} />
              <Collapse in={Boolean(errors.firstName)} unmountOnExit>
                <Text color="error.fill">
                  {errors.firstName && errors.firstName.message}
                </Text>
              </Collapse>
            </FormControl>
          </Box>

          <Box>
            <Text mb="6px">Фамилия</Text>
            <FormControl isInvalid={Boolean(errors.lastName)}>
              <Input size="lg" variant="solid" {...register('lastName')} />
              <Collapse in={Boolean(errors.lastName)} unmountOnExit>
                <Text color="error.fill">
                  {errors.lastName && errors.lastName.message}
                </Text>
              </Collapse>
            </FormControl>
          </Box>

          <Box>
            <Text mb="6px">Дата рождения</Text>
            <FormControl isInvalid={Boolean(errors.lastName)}>
              <Input
                size="lg"
                type="date"
                variant="solid"
                {...register('birthday')}
              />
              <Collapse in={Boolean(errors.birthday)} unmountOnExit>
                <Text color="error.fill">
                  {errors.birthday && errors.birthday.message}
                </Text>
              </Collapse>
            </FormControl>
          </Box>

          <Box>
            <Text mb="6px">Пол</Text>
            <FormControl>
              <Controller
                control={control}
                name="gender"
                render={({ field: { ref, ...rest } }) => (
                  <RadioGroup
                    {...rest}
                    h="48px"
                    display="flex"
                    alignItems="center"
                  >
                    <Stack direction="row" gap={2}>
                      <Radio value={Gender.MALE} size="lg">
                        Мужский
                      </Radio>
                      <Radio value={Gender.FEMALE} size="lg">
                        Женский
                      </Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
              <Collapse in={Boolean(errors.gender)} unmountOnExit>
                <Text color="error.fill">
                  {errors.gender && errors.gender.message}
                </Text>
              </Collapse>
            </FormControl>
          </Box>

          <Button
            isLoading={updateProfileLoading}
            maxWidth="140px"
            size="md"
            type="submit"
            variant="solidBlack"
          >
            Сохранить
          </Button>
        </Grid>
      )}
    </>
  );
};
