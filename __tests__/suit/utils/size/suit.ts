import HtmlSuit from '../../../jest/HtmlSuit';
import PathResolver from '../../../jest/PathResolver';

const sizeSuit = new HtmlSuit({
  testMatch: [PathResolver.toRegexSuit('utils/size/unit.test.[jt]s?(x)')],
  publicPath: PathResolver.toReport(`utils/size`),
  filename: `[unit_test]size.html`,
  pageTitle: `Unit_test: Size`,
  enableMergeData: true,
  dataMergeLevel: 2,
  coverageDirectory: './__tests__/reports/utils/size/coverage',
});

export default sizeSuit;
