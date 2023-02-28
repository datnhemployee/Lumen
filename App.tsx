import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './src/screens/Root';

import 'react-native-gesture-handler';

const App = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);

export default App;
