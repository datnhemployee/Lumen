import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
type ButtonProps = TouchableOpacityProps;

const Button: React.FunctionComponent<ButtonProps> = props => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};
export default Button;
export type {ButtonProps};
