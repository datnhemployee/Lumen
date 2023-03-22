import {Config} from 'jest';
import Suit, {SuitProps} from './AbstractSuit';

export default class HtmlSuit extends Suit {
  /**
   * 0 : always create report.
   * 1 : show failure test suites messages only in Report.
   * 2 : only create report when some test suites failed.
   */
  failureMessageOnly: number;
  includeConsoleLog: boolean;
  inlineSource: boolean;
  hideIcon: boolean;
  customInfos: {title: string; value: string}[];

  constructor(
    suitProps: {[key: string]: any} & Omit<
      SuitProps,
      'reporter' | 'publicPath' | 'logoImgPath'
    >,
  ) {
    super({
      ...suitProps,
      publicPath: suitProps?.publicPath ?? `./__tests__`,
      logoImgPath: suitProps?.logoImgPath ?? './__tests__/Google-logo.png',
      reporter: 'jest-html-reporters',
    });

    this.failureMessageOnly = suitProps?.failureMessageOnly ?? 0;
    this.includeConsoleLog = suitProps?.includeConsoleLog ?? true;
    this.inlineSource = suitProps?.inlineSource ?? true; // inline all test to one html file
    this.hideIcon = suitProps?.inlineSource ?? true; // hide all icons linking to author's Github repo
    this.customInfos = suitProps?.inlineSource ?? [
      {title: 'Author', value: 'Dat Nguyen'},
      {title: 'Title', value: 'React Native Developer'},
      {title: 'Company', value: 'Example'},
      {title: 'AppName', value: 'Lumen'},
      {title: 'Env', value: 'dev'},
      {title: 'Branch', value: 'feature/eslint'},
      {title: 'AppVersion', value: '1.0.0'},
    ];
  }

  toPartialConfig(): Config {
    const abstractConfig = super.toPartialConfig();
    const {
      failureMessageOnly,
      includeConsoleLog,
      inlineSource,
      hideIcon,
      customInfos,
    } = this;

    const htmlJestConfig = (abstractConfig.reporters as any[])[1];

    htmlJestConfig[1] = {
      ...htmlJestConfig[1],
      failureMessageOnly,
      includeConsoleLog,
      inlineSource,
      hideIcon,
      customInfos,
    };
    return abstractConfig;
  }
}
