import React from 'react';
import InputMask from "react-input-mask";
import {
  Text,
  Input as InputBase,
  InputProps as InputBaseProps,
  VStack,
} from '@chakra-ui/react';

interface InputProps extends InputBaseProps {
  label: string;
  mask: string | Array<(string | RegExp)>;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, ...rest}) => {
  return (
    <>
      <VStack
      align='left'
      >
        <Text fontSize='4xl' fontFamily='Roboto'>{ label }</Text>
        <InputBase
          as={InputMask}
          size='lg'
          width={300}
          value={value}
          onChange={onChange}
          maskChar={null}
          {...rest}
        />
      </VStack>
    </>
  );
}

export default Input;