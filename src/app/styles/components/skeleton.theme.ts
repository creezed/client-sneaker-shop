import { cssVar, defineStyle, defineStyleConfig } from '@chakra-ui/react';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

const brand = defineStyle({
  [$startColor.variable]: 'colors.brandGray.100',
  [$endColor.variable]: 'colors.brandGray.300',
});

export const Skeleton = defineStyleConfig({
  variants: {
    brand: brand,
  },
  defaultProps: {
    variant: 'brand',
  },
});
