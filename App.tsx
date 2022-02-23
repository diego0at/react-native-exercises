import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ScreensCalculator } from './src/screens/ScreensCalculator';
import { styles } from './src/theme/themeApp';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"  //for IOS
      />
      <ScreensCalculator />
    </SafeAreaView>
  )
}

export default App;