import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/themeApp';

interface Props {
   color?: string;
   text: string;
   width?: boolean;
   action: (numberText: string) => void;
}

export const ButtonCalc = ({ color = '#2D2D2D', text, width = false, action }: Props) => {
   return (
      <TouchableOpacity onPress={() => action(text)}>
         <View
            style={{
               ...styles.button,
               backgroundColor: color,
               width: (width) ? 145 : 65,
            }}>
            <Text style={{ ...styles.buttonText, color: (color === '#9B9B9B' ? 'black' : 'white') }}>{text}</Text>
         </View>
      </TouchableOpacity>
   )
}
