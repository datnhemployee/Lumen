import {Platform} from 'react-native';

const SHADOW = Platform.select({
  android: {elevation: 5},
  ios: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
});

export default SHADOW;
