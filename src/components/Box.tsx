import { Box as BoxBase, BoxProps as BoxBaseProps} from '@chakra-ui/react';
import React from 'react';

interface BoxProps extends BoxBaseProps{
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <BoxBase
      height="4xl"
      width='8xl'
      bgColor='white'
      borderRadius='2xl'
      boxShadow='xl'
      {...rest}
    >
      { children }
    </BoxBase>
  );
}

export default Box;