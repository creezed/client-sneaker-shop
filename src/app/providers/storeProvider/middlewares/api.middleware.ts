import { createStandaloneToast } from '@chakra-ui/react';
import { isRejectedWithValue } from '@reduxjs/toolkit';

const { toast } = createStandaloneToast();
export const rtkQueryErrorLogger = () => (next: any) => (action: any) => {
  if (isRejectedWithValue(action)) {
    console.warn('We got a rejected action!');
    toast({
      title: 'Ошибка',
      description: action.payload?.data?.message || 'Ошибка сервера',
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  }

  return next(action);
};
