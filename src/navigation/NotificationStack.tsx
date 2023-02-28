import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATION from '../utils/navigation';
import NotificationScreen from '../screens/notification';

const Stack = createStackNavigator();

type NotificationStackProps = {};

const NotificationStack: React.FunctionComponent<
  NotificationStackProps
> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NAVIGATION.NOTIFICATION_SCREEN}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
};
export default NotificationStack;
