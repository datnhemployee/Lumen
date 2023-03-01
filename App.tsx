import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './src/screens/Root';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import 'react-native-gesture-handler';

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
