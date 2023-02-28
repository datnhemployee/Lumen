import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NAVIGATION from '../utils/navigation';
import HomeStack from './HomeStack';
import HomeBottomTab from './HomeBottomTab';
import NotificationStack from './NotificationStack';
import CardStack from './CardStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

type TabNavigatorProps = {};

const TabNavigator: React.FunctionComponent<TabNavigatorProps> = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={HomeBottomTab}>
      <Tab.Screen name={NAVIGATION.HOME_STACK} component={HomeStack} />
      <Tab.Screen
        name={NAVIGATION.NOTIFICATION_STACK}
        component={NotificationStack}
      />
      <Tab.Screen name={NAVIGATION.CARD_STACK} component={CardStack} />
      <Tab.Screen name={NAVIGATION.ACCOUNT_STACK} component={AccountStack} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
