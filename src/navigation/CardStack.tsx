import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import Card from '../screens/card';
import NAVIGATION from '../utils/navigation';
type CardStackProps = {};

const Stack = createStackNavigator();

const CardStack: React.FunctionComponent<CardStackProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={NAVIGATION.CARD_SCREEN} component={Card} />
    </Stack.Navigator>
  );
};
export default CardStack;
