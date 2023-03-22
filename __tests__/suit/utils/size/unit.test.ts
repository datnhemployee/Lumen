import SIZE, {
  DEFAULT_SIZE,
  getSizeVal,
  toSizeWithDelta,
} from '../../../../src/utils/size';

describe('getSizeVal', () => {
  const inputSize = SIZE;

  describe('opts={parseNum: false}', () => {
    test('case: Expected size name -> expected: equals to SIZE.DOT', () => {
      const expectedSizeName = 'DOT';
      expect(getSizeVal(inputSize, expectedSizeName)).toEqual(SIZE.DOT);
    });

    test('case: Unexpected sizeName -> expected: equals to undefined', () => {
      const unexpectedSizeName = 'Unknown';
      expect(getSizeVal(inputSize, unexpectedSizeName)).toEqual(undefined);
    });
  });

  describe('opts={parseNum: true}', () => {
    test('case: Expected size name -> expected: equals to SIZE.DOT', () => {
      const expectedSizeName = 'DOT';
      expect(getSizeVal(inputSize, expectedSizeName, {parseNum: true})).toEqual(
        SIZE.DOT > DEFAULT_SIZE ? SIZE.DOT : DEFAULT_SIZE,
      );
    });

    test('case: Unknown sizeName -> expected: equals to DEFAULT_SIZE', () => {
      expect(getSizeVal(inputSize, 'Unknown', {parseNum: true})).toEqual(
        DEFAULT_SIZE,
      );
    });
  });
});

describe('toSizeWithDelta', () => {
  let EMPTY_SIZE: typeof SIZE | null = null;
  let DELTA: number = 1;

  beforeAll(() => {
    EMPTY_SIZE = {
      ICON_MEDIUM: DEFAULT_SIZE,
      ICON_LARGE: DEFAULT_SIZE,
      PROMOTION_HEIGHT: DEFAULT_SIZE,

      SPACE_TINY: DEFAULT_SIZE,
      SPACE_SMALL: DEFAULT_SIZE,
      SPACE_MEDIUM: DEFAULT_SIZE,
      SPACE_LARGE: DEFAULT_SIZE,

      BAR: DEFAULT_SIZE,

      RADIUS_BAR: DEFAULT_SIZE,
      RADIUS_BUTTON: DEFAULT_SIZE,
      RADIUS_CARD: DEFAULT_SIZE,

      BORDER: DEFAULT_SIZE,
      DOT: DEFAULT_SIZE,
    };
  });

  test('case: Unexpected initial size -> expected: return EMPTY_SIZE', () => {
    const unexpectedValueInitSize = {DOT: NaN};
    const resultSize = toSizeWithDelta(unexpectedValueInitSize, DELTA);
    expect(resultSize).toEqual(EMPTY_SIZE);
  });

  test('case: Unexpected size -> expected: return EMPTY_SIZE', () => {
    const unexpectedInitSize = {UNEXPECTED_KEY: NaN};
    const resultSize = toSizeWithDelta(unexpectedInitSize, DELTA);
    expect(resultSize).toEqual(EMPTY_SIZE);
  });

  test('case: Wrong argument type --> throw TypeError', () => {
    const wrongArg = null;
    const resultToSizeWithDelta = () => toSizeWithDelta(wrongArg);
    expect(resultToSizeWithDelta).toThrowError(TypeError);
  });
});
