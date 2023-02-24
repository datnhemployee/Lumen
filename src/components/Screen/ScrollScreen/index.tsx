import React from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';
type ScrollScreenProps = ScrollViewProps;

const ScrollScreen: React.FunctionComponent<ScrollScreenProps> = props => (
  <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
    {props.children}
  </ScrollView>
);
export default ScrollScreen;
