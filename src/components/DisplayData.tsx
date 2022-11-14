import { Text, VStack } from '@chakra-ui/react';
import React from 'react';
import DataField from './DataField';

export interface DataType {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;

  erro?: boolean;
}

interface DisplayDataProps {
  data: DataType;
}

const DisplayData: React.FC<DisplayDataProps> = ({ data }) => {

  if (Object.keys(data).length === 0) return (
    <Text fontSize='xl'>
      Por favor, informe o CEP no campo de texto.
    </Text>
  )

  if (data.erro) return (
    <Text fontSize='xl' color='red' fontWeight='bold'>
      CEP inválido. Por favor, insira um CEP válido.
    </Text>
  )

  return (
    <VStack align='left'>
      <DataField label='CEP' value={data.cep} />
      <DataField label='Logradouro' value={data.logradouro} />
      { data.complemento !== "" &&
        <DataField label='Complemento' value={data.complemento} />
      }
      <DataField label='Bairro' value={data.bairro} />
      <DataField label='Localidade' value={data.localidade} />
      <DataField label='UF' value={data.uf} />
      <DataField label='DDD' value={data.ddd} />
    </VStack>
  );
}

export default DisplayData;