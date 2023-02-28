import React from 'react';
import {SafeAreaView, StyleSheet, ViewProps} from 'react-native';
import COLOR from '../../utils/color';
type FullScreenProps = ViewProps;

const FullScreen: React.FunctionComponent<FullScreenProps> = props => (
  <SafeAreaView {...props} style={[styles.wrapper, props.style]}>
    {props.children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: COLOR.BACKGROUND},
});
export default FullScreen;
