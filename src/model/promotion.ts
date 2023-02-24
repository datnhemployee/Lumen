import {ImageProps} from 'react-native';

type Promotion = {
  image: ImageProps['source'];
  title: string;
  message: string;
  status?: string;
};
export type {Promotion};
