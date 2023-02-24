import {Dimensions, Platform} from 'react-native';

const CONSTANTS = {
  NUMBER_LINES_PROMOTION: 3,
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,
  SHADOW_STYLE: Platform.select({
    android: {elevation: 5},
    ios: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
    },
  }),
};

export default CONSTANTS;
