import React from 'react'
import { View, Text } from 'react-native';

export const ScreenHelloWord = () => {
   return (
      <View style={{
         flex: 1,
         backgroundColor: 'red',
         justifyContent: 'center'
      }}>
         <Text style={{
            fontSize: 45,
            textAlign: 'center'
         }}>Hello world update !!!!</Text>
      </View>
   )
}

