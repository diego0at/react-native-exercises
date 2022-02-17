import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
   title: string;
   position?: 'positionRight' | 'positionLeft'
   onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'positionRight' }: Props) => {

   const ios = () => {
      return (
         <TouchableOpacity onPress={onPress}
            activeOpacity={0.75}
            style={[styles.fabLocation, styles[position]]}
         >
            <View style={styles.fab}>
               <Text style={styles.fabText}>{title} 1</Text>
            </View>
         </TouchableOpacity >
      )
   }

   const android = () => {
      return (
         <View style={[styles.fabLocation, styles[position]]}>
            <TouchableNativeFeedback onPress={onPress}
               background={TouchableNativeFeedback.Ripple('#eeb5c3', false, 30)}
            >
               <View style={styles.fab}>
                  <Text style={styles.fabText}>{title} 1</Text>
               </View>
            </TouchableNativeFeedback >
         </View >
      )
   }

   return Platform.OS === 'android' ? android() : ios()
}

const styles = StyleSheet.create({
   fabLocation: {
      position: 'absolute',
      bottom: 10,
   },
   positionRight: {
      right: 15
   },
   positionLeft: {
      left: 15
   },
   fab: {
      borderRadius: 100,
      backgroundColor: '#b41b42',
      width: 60,
      height: 60,
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
   },
   fabText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center'
   }
})