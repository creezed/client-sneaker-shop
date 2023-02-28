import { Text } from '@chakra-ui/react';
import { SystemProps } from '@chakra-ui/system';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  link: string;
  align?: SystemProps['textAlign'];
}

export const Logo: FC<LogoProps> = ({ link, align = 'initial' }) => {
  return (
    <Text
      as={Link}
      to={link}
      fontSize="18px"
      textTransform="uppercase"
      fontWeight={500}
      lineHeight={1}
      color="text.heading"
      textAlign={align}
    >
      sneaker <br /> shop.
    </Text>
  );
};
