import { useSearchParams } from 'expo-router';
import React, { FC } from 'react';
import { Text, View } from 'react-native';

const QuoteDetails: FC = () => {
  const { quote_id } = useSearchParams()
  
  return (
    <View>
      <Text>
        Quote details {quote_id}
      </Text>
    </View>
  )
}

export default QuoteDetails;