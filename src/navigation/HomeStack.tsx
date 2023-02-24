import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import NAVIGATION from '../utils/navigation';
type HomeStackProps = {};

const Stack = createStackNavigator();

const HomeStack: React.FunctionComponent<HomeStackProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={NAVIGATION.HOME_SCREEN} component={Home} />
    </Stack.Navigator>
  );
};
export default HomeStack;
