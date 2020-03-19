const joro = require('./joro.js');

test('a', () => {
  expect(typeof joro).toEqual('function');
});

test('b', () => {
  expect(joro(0)).toEqual('1');
  expect(joro(1)).toEqual('11');
  expect(joro(2)).toEqual('21');
  expect(joro(3)).toEqual('1211');
  expect(joro(4)).toEqual('111221');
  expect(joro(5)).toEqual('312211');
  expect(joro(6)).toEqual('13112221');
});
