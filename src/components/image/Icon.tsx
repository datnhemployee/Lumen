import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';
import IMAGE from '../../utils/image';
import SIZE from '../../utils/size';

type IconProps = {
  name: keyof typeof IMAGE;
  size?: number;
  style?: StyleProp<ImageStyle>;
};

const Icon: React.FunctionComponent<IconProps> = props => (
  <Image
    {...props}
    source={IMAGE[props.name]}
    style={[
      {
        height: props.size,
        width: props.size,
      },
      props.style,
    ]}
  />
);

Icon.defaultProps = {
  size: SIZE.ICON_MEDIUM,
};

export default Icon;
