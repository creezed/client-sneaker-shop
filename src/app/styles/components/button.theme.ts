import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  sizes: {
    md: {
      fontSize: '14px',
      lineHeight: 1,
      borderRadius: '4px',
    },
    lg: {
      fontSize: '16px',
      borderRadius: '6px',
    },
  },

  variants: {
    outline: {
      bg: 'transparent',
      border: '2px solid',
      borderColor: 'brand.600',
      color: 'brand.600',
      _hover: {
        bg: 'brand.600',
        color: 'white',
      },
      _active: {
        bg: 'brand.800',
        color: 'white',
        borderColor: 'brand.800',
      },
    },
    solid: {
      bg: 'brand.600',
      color: 'white',
      _hover: {
        bg: 'brand.700',
      },
      _active: {
        bg: 'brand.800',
      },
    },

    solidBlack: {
      bg: 'black',
      color: 'white',
      _hover: {
        bg: 'blackAlpha.900',
      },
      _active: {
        bg: 'blackAlpha.800',
      },
    },

    solidGray: {
      bg: 'brandGray.100',
      color: 'black',
      _hover: {
        bg: 'brandGray.200',
      },
      _active: {
        bg: 'brandGray.300',
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});
