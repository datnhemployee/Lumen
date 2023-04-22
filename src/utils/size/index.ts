import DEFAULT_THEME from '../../theme/default';
import getSizeVal from './getSizeVal';

const DEFAULT_SIZE = 0.01;
const DELTA = 1;

const SIZE_NAME_LIST: string[] = [
  'ICON_MEDIUM',
  'ICON_LARGE',
  'PROMOTION_HEIGHT',

  'SPACE_TINY',
  'SPACE_SMALL',
  'SPACE_MEDIUM',
  'SPACE_LARGE',

  'BAR',

  'RADIUS_BAR',
  'RADIUS_BUTTON',
  'RADIUS_CARD',

  'BORDER',
  'DOT',
];

type Size = {[k: string]: number};

const toSizeWithDelta = (size: Size, delta = DELTA): Size =>
  SIZE_NAME_LIST.reduce((sizeWithDelta, sizeName) => {
    const numSize = getSizeVal(size, sizeName, {parseNum: true});
    return {
      ...sizeWithDelta,
      [sizeName]: numSize * delta,
    };
  }, {});

const SIZE = toSizeWithDelta(DEFAULT_THEME.SIZE);

export default SIZE;
export {DEFAULT_SIZE, getSizeVal, toSizeWithDelta};
