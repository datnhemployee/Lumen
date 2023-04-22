const {DELTA} = require('./constants');
const {default: getSizeVal} = require('./getSizeVal');

const toSizeWithDelta = (size, delta = DELTA) =>
  SIZE_NAME_LIST.reduce((sizeWithDelta, sizeName) => {
    const numSize = getSizeVal(size, sizeName, {parseNum: true});
    return {
      ...sizeWithDelta,
      [sizeName]: numSize * delta,
    };
  }, {});

module.exports = toSizeWithDelta;
