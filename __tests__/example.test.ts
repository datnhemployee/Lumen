import SIZE, {DEFAULT_SIZE, toSizeWithDelta} from '.';

/**
 * Stub (Jest.fn) vs Spy (Jest.SpyOn)
 * Ref: https://codewithhugo.com/jest-fn-spyon-stub-mock/
 */
// const myObj = {
//   doSomething() {
//     console.log('does something');
//   },
// };
// test('stub .toBeCalled()', () => {
//   const stub = jest.fn();
//   stub();
//   expect(stub).toBeCalled();
// });
// test('spyOn .toBeCalled()', () => {
//   const somethingSpy = jest.spyOn(myObj, 'doSomething');
//   myObj.doSomething();
//   expect(somethingSpy).toBeCalled();
// });

/**
 * Arrange/Act/Assert (AAA) is a pattern for arranging and formatting code in Unit Test methods.
 * Ref: https://docs.telerik.com/devtools/justmock/basic-usage/arrange-act-assert#:~:text=The%20idea%20is%20to%20develop,Assert%20%E2%80%93%20verify%20the%20result.
 */
describe('toSizeWithDelta', () => {
  // Arrange – setup the testing objects and prepare the prerequisites for your test.
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

  // Act – perform the actual work of the test.
  test('case: Unexpected initial size -> expected: return EMPTY_SIZE', () => {
    // Arrange – setup the testing objects and prepare the prerequisites for your test.
    const unexpectedValueInitSize = {DOT: NaN};
    // Act – perform the actual work of the test.
    const resultSize = toSizeWithDelta(unexpectedValueInitSize, DELTA);
    // Assert – verify the result.
    expect(resultSize).toEqual(EMPTY_SIZE);
  });
});

/**
 * Black-box testing: Functional testing
 * White-box testing: Functional testing
 */
