// https://en.m.wikipedia.org/wiki/ANSI_escape_code#Colors
const COLOR = {
  INFO: '[44m',
  WARN: '[33m',
  ERROR: '[31m',
};

// Ref: https://blog.logrocket.com/using-console-colors-node-js/
const infoWithColor = (color: string = COLOR.WARN, ...args: any[]) => {
  console.log(`\x1b${color}`, ...args, `\x1b[0m`);
};

const info = (...args: any[]) => infoWithColor(COLOR.INFO, ...args);
const warn = (...args: any[]) => infoWithColor(COLOR.WARN, ...args);
const error = (...args: any[]) => infoWithColor(COLOR.ERROR, ...args);

const Log = {infoWithColor, info, warn, error, COLOR};

export default Log;
