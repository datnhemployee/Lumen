import React from 'react';
import {Text as RnText, TextProps as RnTextProps} from 'react-native';
import styles from './styles';

type TextProps = {
  type?: keyof typeof styles;
} & RnTextProps;

const Text: React.FunctionComponent<TextProps> = props => {
  return (
    <RnText
      {...props}
      style={[styles[props.type ?? 'paragraph1-dark'], props.style]}>
      {props.children}
    </RnText>
  );
};

export default Text;
