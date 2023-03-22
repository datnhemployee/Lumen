import Suit from './AbstractSuit';

export default class DummyReport extends Suit {
  constructor() {
    super({
      reporter: '',
      logoImgPath: '',
      pageTitle: '',
      publicPath: '',
      filename: '',
      testMatch: ['no_test.ts'],
    });
  }

  toPartialConfig() {
    return {
      testMatch: this.testMatch.slice(),
    };
  }
}
