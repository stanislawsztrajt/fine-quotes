import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  text: string;
  action: (...args: []) => void
}

const Button: FC<Props> = ({ text, action }) => {
  return (
    <TouchableOpacity className='px-6 py-1 mt-4 rounded-xl bg-lime-500' onPress={action}>
      <Text className='text-lg text-white'>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;