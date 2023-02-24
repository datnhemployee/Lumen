import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import Account from '../screens/account';
import NAVIGATION from '../utils/navigation';
type AccountStackProps = {};

const Stack = createStackNavigator();

const AccountStack: React.FunctionComponent<AccountStackProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={NAVIGATION.ACCOUNT_SCREEN} component={Account} />
    </Stack.Navigator>
  );
};
export default AccountStack;
