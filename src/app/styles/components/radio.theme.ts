import { defineStyleConfig } from '@chakra-ui/react';

export const Radio = defineStyleConfig({
  baseStyle: {
    control: {
      bg: 'white',
      borderColor: 'gray.100',
      transition: '.25s ease',
      _checked: {
        bg: 'black',
        borderColor: 'black',
        _hover: {
          bg: 'blackAlpha.800',
          borderColor: 'blackAlpha.800',
        },
      },
    },
  },
});
