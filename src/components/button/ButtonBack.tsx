import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import COLOR from '../../utils/color';
import IMAGE from '../../utils/image';
import OPACITY from '../../utils/opacity';
import SIZE from '../../utils/size';

const ICON_SIZE = SIZE.ICON_MEDIUM;
const PADDING = SIZE.SPACE_SMALL;
const MARGIN_TOP = SIZE.SPACE_TINY;

type ButtonBackProps = {};

const ButtonBack: React.FunctionComponent<ButtonBackProps> = () => {
  return (
    <TouchableOpacity style={styles.wrapper} activeOpacity={OPACITY.TOUCH}>
      <Image source={IMAGE.CHEVRON_LEFT} style={[styles.icon]} />
    </TouchableOpacity>
  );
};

type ButtonBackTopLeftProps = ButtonBackProps & {
  topLeftStyle?: StyleProp<ViewProps>;
};

const ButtonBackTopLeft = ({
  topLeftStyle,
  ...buttonBackProps
}: ButtonBackTopLeftProps) => (
  <View style={[styles.topLeftWrapper, topLeftStyle]}>
    <ButtonBack {...buttonBackProps} />
  </View>
);

const SpaceTopLeftButtonBack = () => <View style={styles.topLeftSpace} />;

const styles = StyleSheet.create({
  wrapper: {
    padding: PADDING,
    borderRadius: PADDING + ICON_SIZE,
    backgroundColor: COLOR.BACKGROUND,
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    resizeMode: 'contain',
  },

  topLeftWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: MARGIN_TOP,
    marginLeft: SIZE.SPACE_MEDIUM,
  },

  topLeftSpace: {
    height: PADDING * 2 + ICON_SIZE + MARGIN_TOP,
  },
});

export default ButtonBack;
export {ButtonBackTopLeft, SpaceTopLeftButtonBack};
