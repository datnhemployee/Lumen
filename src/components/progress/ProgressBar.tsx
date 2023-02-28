import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import COLOR from '../../utils/color';
import SIZE from '../../utils/size';
type ProgressBarProps = {
  contentContainerStyle: StyleProp<ViewStyle>;

  flexDone: number;
  flexUndone: number;
};

const ProgressBar: React.FunctionComponent<ProgressBarProps> = props => {
  return (
    <View style={[styles.wrapper, props.contentContainerStyle]}>
      <View style={[styles.done, {flex: props.flexDone}]} />
      <View style={[styles.undone, {flex: props.flexUndone}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: SIZE.BAR,
    backgroundColor: COLOR.BAR_DEFAULT,
    flexDirection: 'row',
    borderRadius: SIZE.RADIUS_BAR,
  },
  done: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: SIZE.RADIUS_BAR,
  },
  undone: {},
});

export default ProgressBar;
