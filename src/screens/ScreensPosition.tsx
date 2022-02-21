import React from 'react';
import { StyleSheet, View } from 'react-native';

export const ScreensPosition = () => {
   return (
      <View style={styles.container}>
         <View style={styles.boxOne}></View>
         <View style={styles.boxTwo}></View>
         <View style={styles.boxThree}></View>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#680e34',
      // justifyContent: 'center',
      // alignItems: 'center',
   },
   boxOne: {
      width: 110,
      height: 110,
      backgroundColor: '#FAFAFa',
      borderWidth: 10,
      borderColor: 'dark',
      position: 'absolute',
      bottom: 0,
      right: 0,
   },
   boxTwo: {
      width: 110,
      height: 110,
      backgroundColor: '#FF6f00',
      borderWidth: 10,
      borderColor: 'dark',
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1,
   },
   boxThree: {
      // width: 110,
      // height: 110,
      backgroundColor: '#FF6f00',
      borderWidth: 10,
      borderColor: 'dark',
      // position: 'absolute',
      // top: 0,
      // right: 0,
      ...StyleSheet.absoluteFillObject,
   }
});
