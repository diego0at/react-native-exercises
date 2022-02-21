import React from 'react';
import { ScreensCounter } from './src/screens/ScreensCounter';
// import { ScreenHelloWord } from './src/screens/helloWorld';
import { ScreensBoxObjectModel } from './src/screens/ScreensBoxObjectModel';
import { SafeAreaView } from 'react-native';
import { ScreensDimensions } from './src/screens/ScreensDimensions';
import { ScreensPosition } from './src/screens/ScreensPosition';
import { ScreensFlex } from './src/screens/ScreensFlex';
import { ScreensTask } from './src/screens/ScreensTask';

export const App = () => {
  return (
    // <ScreenHelloWord />
    // <ScreensCounter />
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScreensBoxObjectModel /> */}
      {/* <ScreensDimensions /> */}
      {/* <ScreensPosition /> */}
      {/* <ScreensFlex /> */}
      <ScreensTask />
    </SafeAreaView>
  )
}