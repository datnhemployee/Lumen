import path from 'path';

const expectToMatchSnapshot = () => {
  const currentSnapshot = require('./snapshot.current.json');
  const expectedSnapshot = require('./snapshot.current.json');
  expect(currentSnapshot?.value === expectedSnapshot?.value).toBe(true);
};

const toPathToSource = (pathFromSrcFolder: string) =>
  path.resolve(__dirname, `../../../../../src/${pathFromSrcFolder}`);

const Js2Flow = {
  expectToMatchSnapshot,
  toPathToSource,
};

export default Js2Flow;
