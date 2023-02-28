import {StyleSheet} from 'react-native';
import COLOR from '../../utils/color';
import FONT from '../../utils/font';

const styles = StyleSheet.create({
  'h1-dark': {
    color: COLOR.TEXT_DARK,
    fontFamily: FONT.FAMILY.REGULAR,
    fontSize: FONT.SIZE.HUGE,
  },
  'h3-light': {
    color: COLOR.TEXT_WHITE,
    fontFamily: FONT.FAMILY.BOLD,
    fontSize: FONT.SIZE.LARGE,
  },
  'paragraph1-dark': {
    color: COLOR.PRIMARY,
    fontFamily: FONT.FAMILY.REGULAR,
    fontSize: FONT.SIZE.MEDIUM_2,
  },
  'paragraph1-light': {
    color: COLOR.TEXT_GREY_1,
    fontFamily: FONT.FAMILY.REGULAR,
    fontSize: FONT.SIZE.MEDIUM_2,
  },
  'paragraph3-light': {
    color: COLOR.TEXT_GREY_1,
    fontFamily: FONT.FAMILY.REGULAR,
    fontSize: FONT.SIZE.MEDIUM_3,
  },
  'title1-dark': {
    color: COLOR.TEXT_DARK,
    fontSize: FONT.SIZE.MEDIUM_1,
    fontFamily: FONT.FAMILY.BOLD,
  },
  'title1-light': {
    color: COLOR.TEXT_WHITE,
    fontFamily: FONT.FAMILY.BOLD,
    fontSize: FONT.SIZE.MEDIUM_1,
  },
  'title2-dark': {
    color: COLOR.PRIMARY,
    fontSize: FONT.SIZE.MEDIUM_2,
    fontFamily: FONT.FAMILY.BOLD,
  },
  'title3-dark': {
    color: COLOR.TEXT_GREY_1,
    fontFamily: FONT.FAMILY.MEDIUM,
    fontSize: FONT.SIZE.MEDIUM_3,
  },
});
export default styles;
