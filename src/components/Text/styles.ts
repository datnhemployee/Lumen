import {StyleSheet} from 'react-native';
import COLOR from '../../utils/color';
import FONT from '../../utils/font';
const styles = StyleSheet.create({
  'h1-light': {
    fontSize: FONT.SIZE.H1,
    color: COLOR.SECONDARY,
    fontFamily: FONT.FAMILY.HELIX_REGULAR,
  },
  'h3-dark': {
    fontSize: FONT.SIZE.H3,
    color: COLOR.BACKGROUND,
    fontFamily: FONT.FAMILY.HELIX_BOLD,
  },
  'paragraph1-dark': {
    fontSize: FONT.SIZE.PARAGRAPH_1,
    color: COLOR.TEXT_GRAY_LIGHT,
    fontFamily: FONT.FAMILY.HELIX_REGULAR,
  },
  'paragraph1-light': {
    fontSize: FONT.SIZE.PARAGRAPH_1,
    color: COLOR.TEXT_GRAY_DARK,
    fontFamily: FONT.FAMILY.HELIX_REGULAR,
  },
  'paragraph3-light': {
    fontSize: FONT.SIZE.PARAGRAPH_3,
    color: COLOR.TEXT_GRAY_LIGHT,
    fontFamily: FONT.FAMILY.HELIX_REGULAR,
  },
  'title1-light': {
    fontSize: FONT.SIZE.TITLE_1,
    color: COLOR.SECONDARY,
    fontFamily: FONT.FAMILY.HELIX_BOLD,
  },
  title2: {
    fontSize: FONT.SIZE.TITLE_2,
    color: COLOR.PRIMARY,
  },
  'title3-light': {
    fontSize: FONT.SIZE.TITLE_3,
    color: COLOR.TEXT_GRAY_LIGHT,
    fontFamily: FONT.FAMILY.HELIX_BOLD,
  },
  'button-dark': {
    fontSize: FONT.SIZE.TITLE_1,
    color: COLOR.BACKGROUND,
  },
});
export default styles;
