import {Config} from 'jest';
import type HtmlReporter from '../../../../Base/HtmlReporter';

const reporter: HtmlReporter = {
  publicPath:
    '/Users/datnguyen/Desktop/MyMac/Others/Workplace/react-native/Lumen/__tests__/reports/utils/size/getSizeVal',
  fileName: `[unit_test]size.html`,
  pageTitle: `Unit_test: Size`,
  coverageDirectory: '__tests__/reports/utils/size/getSizeVal/coverage',
};

const testmatch: Config['testMatch'] = [
  '**/__tests__/driver/utils/size/getSizeVal/index.spec.tsx',
];

const getSizeValSpec = {
  reporter,
  testmatch,
};

export default getSizeValSpec;
