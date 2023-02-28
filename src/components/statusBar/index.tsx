import React, {useEffect} from 'react';
import {StatusBar as RnStatusBar} from 'react-native';
import COLOR from '../../utils/color';

type StatusBarProps = {};

const StatusBar: React.FunctionComponent<StatusBarProps> = () => {
  useEffect(() => {
    RnStatusBar.setBackgroundColor(COLOR.SECONDARY);
    RnStatusBar.setBarStyle('light-content');
  }, []);

  return <RnStatusBar />;
};
export default StatusBar;
