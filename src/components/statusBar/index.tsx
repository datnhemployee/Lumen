import React from 'react';
import {
  SafeAreaView,
  StatusBar as RnStatusBar,
  StatusBarProps as RnStatusBarProps,
  StyleSheet,
  View,
} from 'react-native';
import COLOR from '../../utils/color';

type StatusBarProps = RnStatusBarProps;

const BACKGROUND_COLOR = COLOR.SECONDARY;

const StatusBar: React.FunctionComponent<StatusBarProps> = props => {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView>
        <RnStatusBar
          translucent
          backgroundColor={BACKGROUND_COLOR}
          barStyle="light-content"
          {...props}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: RnStatusBar.currentHeight,
    backgroundColor: BACKGROUND_COLOR,
  },
});

export default StatusBar;
