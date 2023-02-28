import React from 'react';
import {ScrollView, ScrollViewProps, StyleSheet} from 'react-native';
import COLOR from '../../utils/color';
type ScrollScreenProps = ScrollViewProps;
const ScrollScreen: React.FunctionComponent<ScrollScreenProps> = props => {
  return (
    <ScrollView
      {...props}
      style={[styles.wrapper, props.style]}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: COLOR.BACKGROUND},
});

export default ScrollScreen;
