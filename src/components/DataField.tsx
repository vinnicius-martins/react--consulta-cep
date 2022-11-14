import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

interface DataFieldProps extends TextProps {
  label: string;
  value: string;
}

const DataField: React.FC<DataFieldProps> = ({ label, value, ...rest }) => {
  return (
    <Text
    fontFamily='Roboto'
    fontSize='2xl'
    {...rest}
    >{ label }: {value}</Text>
  );
}

export default DataField;