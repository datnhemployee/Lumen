import {StyleSheet} from 'react-native';
import COLOR from '../../utils/color';
import METRIC from '../../utils/metric';
const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLOR.BACKGROUND,
  },
  promotionTitle: {
    marginLeft: METRIC.MEDIUM,
    marginBottom: METRIC.MEDIUM,
  },
  promotionSectionWrapper: {
    marginTop: METRIC.MEDIUM,
  },
  promotionFooter: {
    height: METRIC.HUGE,
  },
});
export default styles;
