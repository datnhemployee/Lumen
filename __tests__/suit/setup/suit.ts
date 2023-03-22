import HtmlSuit from '../../jest/HtmlSuit';
import PathResolver from '../../jest/PathResolver';

const setUpSuit = new HtmlSuit({
  testMatch: [PathResolver.toRegexSuit('setup/unit.test.[jt]s?(x)')],
  publicPath: PathResolver.toReport(`setup`),
  filename: `[unit_test]set_up.html`,
  pageTitle: `Unit_test: Set up`,
  enableMergeData: true,
  dataMergeLevel: 2,
  coverageDirectory: './__tests__/reports/setup/coverage',
});

export default setUpSuit;
