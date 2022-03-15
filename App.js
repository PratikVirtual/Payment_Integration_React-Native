import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StripeApp from './src/StripeApp';
import { StripeProvider } from '@stripe/stripe-react-native';
import React from 'react';

export default function App() {

  return (

    // now our app has assess to the stripe
    <StripeProvider publishableKey='pk_test_51KZtBxSDYzHRtS84QXJq3uAkwGf0u7s2VxymcUQxUEmhbHYKiWOaYV4eDhLEHnN9FUg5DYMeIFWKIodh5cLpY8O4008tvvn5T2'>
      <StripeApp />
    </StripeProvider>
  )
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});

