import {DEFAULT_SIZE} from './constants';

const getSizeVal = (size, sizeName, opts) => {
  const mappedSizeValue = size[sizeName];

  if (!!opts && !!opts.isParseNumRequired) {
    const parseNumResult =
      parseFloat(mappedSizeValue) >= DEFAULT_SIZE
        ? mappedSizeValue
        : DEFAULT_SIZE;
    return parseNumResult;
  }

  return mappedSizeValue;
};

export default getSizeVal;
