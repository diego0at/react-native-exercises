import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ScreensFlex = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.boxOne}>box one</Text>
         <Text style={styles.boxTwo}>box two</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
         <Text style={styles.boxThree}>box three</Text>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#90CAF9',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
   },
   boxOne: {
      padding: 3,
      borderWidth: 2,
      borderColor: 'black',
      fontSize: 20,
   },
   boxTwo: {
      padding: 3,
      borderWidth: 2,
      borderColor: 'black',
      fontSize: 20,
   },
   boxThree: {
      padding: 3,
      borderWidth: 2,
      borderColor: 'black',
      fontSize: 20,
   }
});
