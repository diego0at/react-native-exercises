import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

// const { width, heigh } = Dimensions.get('window');

export const ScreensDimensions = () => {

   const { width, height } = useWindowDimensions()

   return (
      <View>
         <View style={styles.container}>
            <View style={{ ...styles.boxPurple, width: width * .55 }}></View>
            <View style={styles.boxOrange}></View>
         </View>
         <Text style={styles.title}>W : {width}, H : {height}</Text>
      </View>
   )
};;

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'red',
      height: 300,
      width: '100%'
   },
   boxPurple: {
      backgroundColor: '#6a1b9a',
      height: '50%',
   },
   boxOrange: {
      width: '50%',
      height: '50%',
      backgroundColor: '#C62828'
   },
   title: {
      fontSize: 20,
      textAlign: 'center'
   }
});