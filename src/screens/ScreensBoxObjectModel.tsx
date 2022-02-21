import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const ScreensBoxObjectModel = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Box objectModel</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'red',
   },
   title: {
      fontSize: 15,
      width: '50%',
      borderWidth: 3,
      padding: 20,
      textAlign: 'center',
      margin: 20
   }
});