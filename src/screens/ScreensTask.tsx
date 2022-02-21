import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ScreensTask = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.box_one}></Text>
         <Text style={styles.box_two}></Text>
         <Text style={styles.box_three}></Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#90CAF9',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   box_one: {

      width: 100,
      height: 100,

      borderWidth: 10,
      backgroundColor: '#7B1FA2',
      borderColor: 'white',
   },
   box_two: {

      width: 100,
      height: 100,

      borderWidth: 10,
      backgroundColor: '#FFEB3B',
      borderColor: 'white',
      position: 'relative',
      top: 50,
   },
   box_three: {

      width: 100,
      height: 100,

      padding: 3,
      borderWidth: 10,
      backgroundColor: '#00E5FF',
      borderColor: 'white',
      // flex: 2,
      // alignSelf: 'stretch',
   }
});