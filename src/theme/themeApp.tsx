import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   background: {
      flex: 1,
      backgroundColor: 'black',
   },
   calculatorContainer: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'flex-end',
   },
   result: {
      color: 'white',
      fontSize: 60,
      textAlign: 'right',
      marginRight: 10,
      marginBottom: 10,
   },
   smallResult: {
      color: 'rgba(255,255,255,0.5)',
      fontSize: 30,
      textAlign: 'right',
      marginRight: 10,
      marginBottom: 10,
   },
   row: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 18,
      paddingHorizontal: 10,
   },
   button: {
      height: 65,
      // width: 65,
      borderRadius: 100,
      // backgroundColor: '#FF9427',
      justifyContent: 'center',
      marginHorizontal: 10,
   },
   buttonText: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      fontWeight: '300',
   }
});