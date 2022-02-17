import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ScreensCounter = () => {

   const [counter, setCounter] = useState(10);

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Counter: {counter}</Text>

         <Fab
            title='+'
            onPress={() => setCounter(counter + 1)}
         />

         <Fab
            title='-'
            position='positionLeft'
            onPress={() => setCounter(counter - 1)}
         />

      </View>
   )
}


const styles = StyleSheet.create({
   button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
   },
   container: {
      flex: 1,
      justifyContent: 'center'
   },
   title: {
      textAlign: 'center',
      fontSize: 40,
   },
   fabLocationBottomRight: {
      position: 'absolute',
      bottom: 10,
      right: 15
   },
   fabLocationBottomLeft: {
      position: 'absolute',
      bottom: 10,
      left: 15
   },
   fab: {
      borderRadius: 100,
      backgroundColor: '#680E34',
      width: 60,
      height: 60,
      justifyContent: 'center',
   },
   fabText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center'
   }
})