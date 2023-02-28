import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import COLOR from '../../utils/color';
import SIZE from '../../utils/size';
type NotificationDotProps = ViewProps;

const NotificationDot: React.FunctionComponent<
  NotificationDotProps
> = props => <View style={[styles.dot, props.style]} />;

const styles = StyleSheet.create({
  dot: {
    width: SIZE.DOT,
    height: SIZE.DOT,
    borderRadius: SIZE.DOT,
    backgroundColor: COLOR.WARNING,
  },
});

export default NotificationDot;
