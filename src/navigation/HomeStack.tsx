import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATION from '../utils/navigation';
import HomeScreen from '../screens/home';

const Stack = createStackNavigator();

type HomeStackProps = {};

const HomeStack: React.FunctionComponent<HomeStackProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NAVIGATION.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default HomeStack;
