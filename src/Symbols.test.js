const Symbols = require('./Symbols');

test('Symbol is a factory function used by creating a symbol', () => {
  expect(Symbols.type).toBe('function');
})

test('Symbol instance is created by `Symbol([description])` and has `symbol` type', () => {
  expect(typeof Symbols.instanceI).toBe('symbol');
})

test('Symbols with the same description is not the same instance, but has the same printable representation', () => {
  expect(Symbols.instanceI).not.toBe(Symbols.instanceII);
  expect(Symbols.instanceI.toString()).toBe(Symbols.instanceII.toString());
})
