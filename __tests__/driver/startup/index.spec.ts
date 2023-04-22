import DEFAULT_THEME from '../../../src/theme/default';
import SIZE from '../../../src/utils/size';

describe('SIZE', () => {
  test('V_SIZE_EQUAL_DEFAULT_THEME_SIZE [ SIZE deepEqual DEFAULT_THEME.SIZE -> Expected: true ]', () => {
    const appSize = SIZE;
    const expectedSize = DEFAULT_THEME.SIZE;
    expect(appSize).toEqual(expectedSize);
  });
});
