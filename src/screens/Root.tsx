import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from '../navigation/TabNavigator';

type RootProps = {};

const Root: React.FunctionComponent<RootProps> = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
export default Root;
