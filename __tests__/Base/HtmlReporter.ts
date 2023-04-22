import {Config} from 'jest';

export enum FailureMessageOption {
  AlwaysCreateReport,
  ShowFailureOnlyInReport,
  OnlyCreateReportWhenTestSuitFailed,
}

type HtmlReporter = Required<
  Pick<Config, 'coverageDirectory'> & {
    /**
     * @description specify the base path
     * */
    publicPath: string;

    /**
     * @descriptipon
     * file name of export (including .html)
     * */
    fileName: string;

    /**
     * @description specify header and page title
     * */
    pageTitle: string;
  }
> &
  Partial<
    Pick<Config, 'collectCoverage' | 'coverageReporters'> & {
      /**
       * @description specify path of the image that will be displayed to the right of page title
       * */
      logoImgPath: string;

      /**
       * @descriptipon
       * file name of export (including .html)
       * */
      failureMessageOnly?: FailureMessageOption;

      /**
       * @descriptipon
       * file name of export (including .html)
       * */
      includeConsoleLog?: boolean;

      /**
       * Inline all test in one report file
       * */
      inlineSource?: boolean;

      /**
       * @description Hide all icons linking to author's Github repo
       * */
      hideIcon?: boolean;

      customInfos?: {title: string; value: string}[];
    }
  >;

export default HtmlReporter;
