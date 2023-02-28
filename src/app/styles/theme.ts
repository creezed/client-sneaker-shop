import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { Styles } from '@chakra-ui/theme-tools';
import { colors } from '@/app/styles/colors';
import { Button } from '@/app/styles/components/button.theme';
import { Checkbox } from '@/app/styles/components/checkbox.theme';
import { Input } from '@/app/styles/components/input.theme';
import { Radio } from '@/app/styles/components/radio.theme';
import { Skeleton } from '@/app/styles/components/skeleton.theme';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles: Styles = {
  global: {
    html: {
      height: 'full',
      overflowX: 'hidden',
    },
    '#root': {
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden',
      minHeight: 'full',
    },
    body: {
      height: 'full',
      width: 'full',
      bg: 'bg',
      WebkitTapHighlightColor: 'transparent',
    },
    '::selection': {
      bg: 'brand.300',
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'gray.200',
      borderRadius: '24px',
    },
  },
};

const shadows = {
  outline: '0 0 0 3px rgba(232,52,69,0.4)',
};

export const theme = extendTheme({
  config,
  styles,
  shadows,
  colors,
  components: { Button, Input, Checkbox, Skeleton: Skeleton, Radio },
});
