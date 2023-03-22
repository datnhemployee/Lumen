import type {Config} from 'jest';
import Log from './src/utils/log';
import ArgvResolver from './__tests__/jest/ArgvResolver';
import DummySuit from './__tests__/jest/DummySuit';

const CURRENT_REPORT = (() => {
  const hasNoSuit = !ArgvResolver.checkRequired([ArgvResolver.NAME.SUIT]);
  if (hasNoSuit) {
    Log.infoWithColor(
      Log.COLOR.ERROR,
      `\nError: Option ${ArgvResolver.NAME.SUIT} is required to test.`,
      `\n       Please try again and include this option.`,
      '\n',
    );
    return new DummySuit();
  }

  const argSuit = ArgvResolver.select(ArgvResolver.NAME.SUIT);
  switch (argSuit?.value) {
    case 'size':
      return require('./__tests__/suit/utils/size/suit').default;

    case 'setup':
      return require('./__tests__/suit/setup/suit').default;

    default:
      return new DummySuit();
  }
})();

const config: Config = {
  preset: 'react-native',
  verbose: false,
  notify: true,
  ...(CURRENT_REPORT.toPartialConfig?.() ?? {}),
};

export default config;
