import {ImageProps} from 'react-native';

type Promotion = {
  image: ImageProps['source'];
  title: string;
  message: string;
  submessage: string;
};

export type {Promotion};
