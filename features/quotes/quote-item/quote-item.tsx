import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Quote } from '../types';
import { Link } from 'expo-router';

interface Props {
  quote: Quote
}

const QuoteItem: FC<Props> = ({ quote }) => {
  if (quote.body.length < 25) return <></>

  return (
    <View className='mt-8 first:mt-4'>
      <View className='flex flex-row flex-wrap gap-2'>
        { quote.tags.map(tag => (
          <Text className='px-2 py-1 text-xs capitalize border rounded-lg border-lime-600 text-lime-600' key={tag}>{tag}</Text>
        )) }
      </View>

      <Text className='text-base font-medium'>
        { quote.body }
      </Text>

      <Text className='italic'>
        { quote.author }
      </Text>
      <Link href={`quotes-details/${quote.id}`} className='mt-2 underline'>
        Check out
      </Link>
    </View>
  )
}

export default QuoteItem;