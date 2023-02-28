import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
type ButtonProps = TouchableOpacityProps;

const Button: React.FunctionComponent<ButtonProps> = props => (
  <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
);
export default Button;
