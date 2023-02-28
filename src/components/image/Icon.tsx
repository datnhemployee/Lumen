import React from 'react';
import {Image, ImageProps, ImageStyle, StyleProp} from 'react-native';
import IMAGE from '../../utils/image';
import SIZE from '../../utils/size';

type IconProps = {
  name?: keyof typeof IMAGE;
  source?: ImageProps['source'];
  size?: number;
  style?: StyleProp<ImageStyle>;
} & ({} | {});

const Icon: React.FunctionComponent<IconProps> = props => (
  <Image
    {...props}
    source={props?.source ?? IMAGE[props?.name as keyof typeof IMAGE]}
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
