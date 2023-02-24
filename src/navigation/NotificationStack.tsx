import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import Notification from '../screens/notification';
import NAVIGATION from '../utils/navigation';
type NotificationStackProps = {};

const Stack = createStackNavigator();

const NotificationStack: React.FunctionComponent<
  NotificationStackProps
> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={NAVIGATION.NOTI_SCREEN} component={Notification} />
    </Stack.Navigator>
  );
};
export default NotificationStack;
