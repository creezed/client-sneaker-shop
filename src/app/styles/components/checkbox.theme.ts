import { defineStyleConfig } from '@chakra-ui/react';

export const Checkbox = defineStyleConfig({
  baseStyle: {
    control: {
      borderRadius: 5,
      bg: 'white',
      borderColor: 'gray.100',
      transition: '.25s ease',
      _checked: {
        bg: 'brand.600',
        borderColor: 'brand.600',
        _hover: {
          bg: 'brand.700',
          borderColor: 'brand.700',
        },
      },
    },
  },
  variants: {
    filter: {
      control: {
        w: '18px',
        h: '18px',
      },
      label: {
        fontSize: '14px',
      },
    },
  },
});
