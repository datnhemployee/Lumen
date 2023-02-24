import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NAVIGATION from '../utils/navigation';
import AccountStack from './AccountStack';
import CardStack from './CardStack';
import HomeStack from './HomeStack';
import NotificationStack from './NotificationStack';
import HomeBottomBar from './HomeBottomBar';

const Tab = createBottomTabNavigator();

type RootNavigatorProps = {};

const RootNavigator: React.FunctionComponent<RootNavigatorProps> = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBar={props => <HomeBottomBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={NAVIGATION.HOME_STACK} component={HomeStack} />
      <Tab.Screen name={NAVIGATION.NOTI_STACK} component={NotificationStack} />
      <Tab.Screen name={NAVIGATION.CARD_STACK} component={CardStack} />
      <Tab.Screen name={NAVIGATION.ACCOUNT_STACK} component={AccountStack} />
    </Tab.Navigator>
  </NavigationContainer>
);
export default RootNavigator;
