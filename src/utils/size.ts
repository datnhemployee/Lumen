import DEFAULT_THEME from '../theme/default';

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
];

type Size = {[k: string]: number};

const toSizeWithDelta = (size: Size, delta = DELTA): Size =>
  SIZE_NAME_LIST.reduce(
    (sizeWithDelta, sizeName) => ({
      ...sizeWithDelta,
      [sizeName]: size[sizeName] * delta,
    }),
    {},
  );

const SIZE = toSizeWithDelta(DEFAULT_THEME.SIZE);

export default SIZE;
