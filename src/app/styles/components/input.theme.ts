import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      border: '1px solid',
      bg: 'transparent',
      color: 'text.base',
      _placeholder: { color: 'text.base' },
    },
  },

  sizes: {
    md: {
      field: {
        fontSize: 'md',
        borderRadius: '4px',
      },
    },
    lg: {
      field: {
        fontSize: 'lg',
        borderRadius: '6px',
      },
    },
  },

  variants: {
    solid: {
      field: {
        borderColor: 'brandGray.100',
        _hover: {
          borderColor: 'brandGray.200',
        },
        _focus: {
          borderColor: 'blackAlpha.900',
        },
      },
    },
    error: {
      field: {
        borderColor: 'transparent',
        bg: 'error.50',
        _hover: {
          bg: 'error.100',
        },
        _focus: {
          bg: 'white',
          borderColor: 'error.fill',
        },
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});
