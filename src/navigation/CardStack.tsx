import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATION from '../utils/navigation';
import CardScreen from '../screens/card';

const Stack = createStackNavigator();

type HomeStackProps = {};

const CardStack: React.FunctionComponent<HomeStackProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NAVIGATION.CARD_SCREEN} component={CardScreen} />
    </Stack.Navigator>
  );
};
export default CardStack;
