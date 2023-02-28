import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATION from '../utils/navigation';
import NotificationScreen from '../screens/notification';
import AccountScreen from '../screens/account';

const Stack = createStackNavigator();

type AccountStackProps = {};

const AccountStack: React.FunctionComponent<AccountStackProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NAVIGATION.ACCOUNT_SCREEN}
        component={AccountScreen}
      />
    </Stack.Navigator>
  );
};
export default AccountStack;
