const COLOR = {
  WARNING: '[33m',
  ERROR: '[31m',
};

// Ref: https://blog.logrocket.com/using-console-colors-node-js/
const infoWithColor = (color: string = COLOR.WARNING, ...args: any[]) => {
  console.log(`\x1b${color}`, ...args, `\x1b[0m`);
};

const Log = {infoWithColor, COLOR};

export default Log;
