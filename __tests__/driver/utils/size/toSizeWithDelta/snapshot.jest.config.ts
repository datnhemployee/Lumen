import {Config} from 'jest';
import Driver from '../../../../jest/Driver';
import LumenReporter from '../../../../jest/LumenReporter';

const reporter = new LumenReporter({
  pathToFolderDest: `utils/size`,
  fileName: `[snapshot]toSizeWithDelta.html`,
  title: `snapshot: toSizeWithDelta`,
  isCollectCoverage: false,
});

const driver = new Driver({
  reporter,
  specList: ['utils/size/toSizeWithDelta/snapshot.spec.[jt]s?(x)'],
});

export default driver;
