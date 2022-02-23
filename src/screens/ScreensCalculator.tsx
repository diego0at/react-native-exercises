import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/themeApp'

export const ScreensCalculator = () => {

   const {
      number, 
      previousNumber,
      clean,
      positiveNegative,
      buttonDelete,
      calculate, 
      assembleNumber, 
      buttonEqual,
      buttonSubtract,
      buttonDivide,
      buttonMultiply,
   } = useCalculator();

   return (
      <View style={styles.calculatorContainer}>
         <Text style={styles.smallResult}>
            {previousNumber !== '0' && previousNumber}
         </Text>
         <Text style={styles.result}
            numberOfLines={2}
            adjustsFontSizeToFit
         >{number}</Text>

         {/* Row of buttons */}
         <View style={styles.row}>
            {/* Button */}
            <ButtonCalc color='#9B9B9B' text='C' action={clean} />
            <ButtonCalc color='#9B9B9B' text='+/-' action={positiveNegative} />
            <ButtonCalc color='#9B9B9B' text='del' action={buttonDelete} />
            <ButtonCalc color='#FF9427' text='/' action={buttonDivide} />
         </View>
         {/* Row of buttons */}
         <View style={styles.row}>
            {/* Button */}
            <ButtonCalc text='7' action={assembleNumber} />
            <ButtonCalc text='8' action={assembleNumber} />
            <ButtonCalc text='9' action={assembleNumber} />
            <ButtonCalc color='#FF9427' text='*' action={buttonMultiply} />
         </View>
         {/* Row of buttons */}
         <View style={styles.row}>
            {/* Button */}
            <ButtonCalc text='4' action={assembleNumber} />
            <ButtonCalc text='5' action={assembleNumber} />
            <ButtonCalc text='6' action={assembleNumber} />
            <ButtonCalc color='#FF9427' text='-' action={buttonSubtract} />
         </View>
         {/* Row of buttons */}
         <View style={styles.row}>
            {/* Button */}
            <ButtonCalc text='1' action={assembleNumber} />
            <ButtonCalc text='2' action={assembleNumber} />
            <ButtonCalc text='3' action={assembleNumber} />
            <ButtonCalc color='#FF9427' text='+' action={buttonEqual} />
         </View>
         {/* Row of buttons */}
         <View style={styles.row}>
            {/* Button */}
            <ButtonCalc text='0' width={true} action={assembleNumber} />
            <ButtonCalc text='.' action={assembleNumber} />
            <ButtonCalc text='=' action={calculate} />
            {/* Gris dark: #2D2D2D */}
            {/* Orange: #FF9427 */}
         </View>
      </View>
   )
}