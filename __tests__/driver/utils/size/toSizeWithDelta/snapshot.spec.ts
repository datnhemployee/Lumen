import Argv from 'tests/jest/Argv';

describe('snapshot', () => {
  test('expect current snapshot is same as expected snapshot', () => {
    console.log('Argv=', Argv.toJSON());
    expect(
      require('./snapshot.current.json').value ===
        require('./snapshot.expected.json').value,
    ).toBe(true);
  });
});
