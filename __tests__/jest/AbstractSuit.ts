import {Config} from 'jest';

export type SuitProps = {
  reporter: string;
  testMatch: string[];
  logoImgPath: string;
  pageTitle: string;
  publicPath: String;
  filename: string;

  collectCoverage?: boolean;
  coverageReporters?: Config['coverageReporters'];
  coverageDirectory?: Config['coverageDirectory'];
};

class Suit {
  /** name of library to export report */
  reporter: string;

  /** file will run on test */
  testMatch: string[];

  /** path to logo of company */
  logoImgPath: string;

  /** test report title */
  pageTitle: string;

  /** folder to export report file */
  publicPath: String;

  /** file name of export (including .html) */
  filename: string;

  collectCoverage: boolean;
  coverageReporters: Config['coverageReporters'];
  coverageDirectory: Config['coverageDirectory'];

  constructor({
    reporter,
    testMatch,
    logoImgPath,
    pageTitle,
    publicPath,
    filename,

    collectCoverage,
    coverageReporters,
    coverageDirectory,
  }: SuitProps) {
    this.testMatch = testMatch;
    this.reporter = reporter;
    this.logoImgPath = logoImgPath;
    this.pageTitle = pageTitle;
    this.publicPath = publicPath;
    this.filename = filename;

    this.collectCoverage = collectCoverage ?? true;
    this.coverageReporters = coverageReporters ?? ['html', 'text'];
    this.coverageDirectory =
      coverageDirectory ?? './__tests__/reports/coverage';

    this.toPartialConfig = this.toPartialConfig.bind(this);
  }

  toPartialConfig(): Config {
    const {
      logoImgPath,
      pageTitle,
      publicPath,
      filename,
      collectCoverage,
      coverageReporters,
      coverageDirectory,
    } = this;

    return {
      collectCoverage,
      coverageReporters,
      coverageDirectory,
      testMatch: this.testMatch.slice(),
      reporters: [
        'default',
        [
          this.reporter,
          {
            logoImgPath,
            pageTitle,
            publicPath,
            filename,
          },
        ],
      ],
    };
  }
}

export default Suit;
