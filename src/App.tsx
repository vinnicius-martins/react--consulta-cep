import { HStack, StackDivider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Background from './components/Background';
import Box from './components/Box';
import Input from './components/Input';
import DisplayData, { DataType } from './components/DisplayData';

export default function App() {

  const [cep, setCep] = useState('')
  const [data, setData] = useState<DataType>({} as DataType)

  useEffect(() => {
    async function getCepData() {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const responseData = await response.json()
        console.log(responseData)
        setData(responseData);
      } catch (error) {
        console.log(error)
      }
    }

    const cleanText = cep.replace(/\D/g, '');
    const cepValidation = /^[0-9]{8}$/;

    if (cepValidation.test(cleanText)) {
      getCepData()
    } else {
      setData({} as DataType)
    }
  }, [cep])

  function handleCepChange(value: string) {
    // const lastChar = value.slice(-1)
    // console.log(lastChar)
    // if (isNaN(Number(lastChar))) return

    setCep(value)
  }

  return (
    <Background>
      <Box>
        <HStack
        divider={<StackDivider borderColor='gray.200'/>}
        height='inherit'
        justify='space-evenly'
        >
          <Input
            label='CEP'
            placeholder='Ex: 12345-678'
            value={cep}
            onChange={e => handleCepChange(e.target.value)}
            mask="99999-999"
          />
          <DisplayData data={data}/>
        </HStack>
      </Box>
    </Background>
  );
}