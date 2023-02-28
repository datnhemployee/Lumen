import {Dimensions} from 'react-native';

const CONSTANTS = {
  NUM_OF_LINES: {
    PROMOTION: {
      WITHOUT_SUB_MESSAGE: 3,
      WITH_SUB_MESSAGE: 2,
      SUB_MESSAGE: 1,
    },
  },
  SCREEN: {
    WIDTH: Dimensions.get('screen').width,
    HEIGHT: Dimensions.get('screen').height,
  },
};
export default CONSTANTS;
