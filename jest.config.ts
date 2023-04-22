import type {Config} from 'jest';
import Argv from './__tests__/Base/Argv';
import Controller from './__tests__/Base/Controller';

const ARGV = {
  NAME: '--name',
};

const toConfig = async (): Promise<Config> => {
  const name = Argv.select(ARGV.NAME, {isRequired: true});

  switch (name) {
    case 'size/getSizeVal':
      const {
        default: getSizeValSpec,
      } = require('./__tests__/driver/utils/size/getSizeVal/index.ts');

      const config = Controller.toConfigWithHtmlReporter(
        Controller.toConfigWithTestMatch(
          Controller.DEFAULT_CONFIG,
          getSizeValSpec.testmatch,
        ),
        getSizeValSpec.reporter,
      );

      return config;
    default:
      throw new Error(`Unable to resolve config with name '${name}'`);
  }
};

export default toConfig;
