import { Center, CenterProps } from '@chakra-ui/react';
import React from 'react';

interface BackgroundProps extends CenterProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children, ...rest }) => {
  return (
    <Center
    height='100vh'
    bgColor='#EAF0FB'
    {...rest}
    >
      { children }
    </Center>
  );
}

export default Background;