import type {Config} from 'jest';
import type HtmlReporter from './HtmlReporter';
import {FailureMessageOption} from './HtmlReporter';

const DEFAULT_CONFIG: Config = {
  preset: 'react-native',
  verbose: true,
  notify: true,
  testMatch: ['empty.test.ts'],
  bail: true,
  moduleNameMapper: {
    '^/utils/(.*)': '<rootDir>/src/utils',
  },
};

const cloneDeep = (config: Config) => JSON.parse(JSON.stringify(config));

const toConfigWithTestMatch = (
  config: Config,
  testMatch: Config['testMatch'],
) => ({
  ...cloneDeep(config),
  testMatch,
});

const toConfigWithHtmlReporter = (
  config: Config,
  {
    pageTitle,
    publicPath,
    fileName,
    coverageDirectory,

    logoImgPath = '/Users/datnguyen/Desktop/MyMac/Others/Workplace/react-native/Lumen/__tests__/Google-logo.png',
    failureMessageOnly = FailureMessageOption.AlwaysCreateReport,
    includeConsoleLog = true,
    inlineSource = true,
    hideIcon = true,
    customInfos = [
      {title: 'Author', value: 'Dat Nguyen'},
      {title: 'Title', value: 'React Native Developer'},
      {title: 'Company', value: 'Example'},
      {title: 'AppName', value: 'Lumen'},
      {title: 'Env', value: 'dev'},
      {title: 'Branch', value: 'feature/eslint'},
      {title: 'AppVersion', value: '1.0.0'},
    ],
    collectCoverage = true,
    coverageReporters = ['html', 'text'],
  }: HtmlReporter,
): Config => ({
  ...cloneDeep(config),
  collectCoverage,
  coverageDirectory,
  coverageReporters,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        logoImgPath,
        pageTitle,
        publicPath,
        fileName,
        failureMessageOnly,
        includeConsoleLog,
        inlineSource,
        hideIcon,
        customInfos,
      },
    ],
  ],
});

const Controller = {
  DEFAULT_CONFIG,
  toConfigWithTestMatch,
  toConfigWithHtmlReporter,
};

export default Controller;
