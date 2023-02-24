import React from 'react';
import RootNavigator from '../navigation/RootNavigator';
import 'react-native-gesture-handler';
import {withStatusBar} from '../context/StatusBarContext';

type RootProps = {};

const Root: React.FunctionComponent<RootProps> = () => {
  return <RootNavigator />;
};
export default withStatusBar(Root);
