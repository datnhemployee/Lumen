import React from 'react';
import {SafeAreaView, ViewProps} from 'react-native';
import styles from './styles';

type ScreenProps = ViewProps;

const FullScreen: React.FunctionComponent<ScreenProps> = props => {
  return (
    <SafeAreaView {...props} style={[styles.wrapper, props.style]}>
      {props.children}
    </SafeAreaView>
  );
};
export default FullScreen;
