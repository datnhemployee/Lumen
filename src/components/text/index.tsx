import React from 'react';
import {Text as RnText, TextProps as RnTextProps} from 'react-native';
import styles from './styles';

type TextProps = RnTextProps & {
  type: keyof typeof styles;
};

const Text: React.FunctionComponent<TextProps> = props => (
  <RnText {...props} style={[styles[props.type], props.style]}>
    {props.children}
  </RnText>
);

export default Text;
