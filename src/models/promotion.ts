import {ImageProps} from 'react-native';

type Promotion = {
  key: string;
  image: ImageProps['source'];
  title: string;
  message: string;
  subMessage?: string;
};

export type {Promotion};
