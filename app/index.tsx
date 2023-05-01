import React, { useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import FavQuotesService from '../utils/api/fav-quotes-service';
import { useQuery } from 'react-query';
import Button from '../components/buttons/button';
import QuoteItem from '../features/quotes/quote-item/quote-item';


export default function Index() {
  const { data, isLoading, error } = useQuery('quotes', FavQuotesService.getQuotes);
  const [moreQuotesLoading, setMoreQuotesLoading] = useState(false);

  const getMoreQuotes = async () => {
    setMoreQuotesLoading(true)
    const moreQuotes = await FavQuotesService.getQuotes();
    data?.push(...moreQuotes)
    setMoreQuotesLoading(false)
  }

  return (
    <SafeAreaView className='pb-4 bg-white'>
      <Stack.Screen
        options={{
          headerShadowVisible: true,
          headerTitle: 'Quotes',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Text>
              Settings
            </Text>
          ),
          headerRight: () => (
            <Text>
              About
            </Text>
          ),
         }}
      />
      { isLoading ? (
        <ActivityIndicator className='p-4' size='large' />
      ) : error  ? (
        <Text>
          Something went wrong
        </Text>
      ) : data && data.length > 0 ? (
        <FlatList
          className='px-4'
          data={data}
          renderItem={({ item: quote }) => <QuoteItem quote={quote} />}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={
            <>
              { moreQuotesLoading ? (
                <ActivityIndicator className='p-4' size='large' />
              ) : (
                <View className='flex items-center'>
                  <Button text='Get more' action={getMoreQuotes} />
                </View>
              ) }
            </>
          }
        />
      ) : null}
    </SafeAreaView>
  );
}