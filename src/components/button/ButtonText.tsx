import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import COLOR from '../../utils/color';
import SIZE from '../../utils/size';
import Text from '../text';
type ButtonTextProps = TextProps & {
  contentContainerStyle: StyleProp<ViewStyle>;
};

const ButtonText: React.FunctionComponent<ButtonTextProps> = props => {
  return (
    <TouchableOpacity style={[styles.button, props.contentContainerStyle]}>
      <Text type="title1-light">{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZE.SPACE_SMALL,
    borderRadius: SIZE.RADIUS_BUTTON,
  },
});

export default ButtonText;
