const Symbols = require('./Symbols')

test('Symbol is a factory function used by creating a symbol', () => {
  expect(Symbols.type).toBe('function')
})

test('Symbol instance is created by `Symbol([description])` and has `symbol` type', () => {
  expect(typeof Symbols.instanceI).toBe('symbol')
})

test('Symbols with the same description are not the same, but has the same printable representation', () => {
  expect(Symbols.instanceI).not.toBe(Symbols.instanceII)
  expect(Symbols.instanceI.toString()).toBe(Symbols.instanceII.toString())
})

test('Symbol can\'t created by `new` keyword. Because Symbol is not a constructor', () => {
  expect(() => Symbols.newSymbol()).toThrowError(TypeError)
})

test('Symbol\'s length is 0', () => {
  expect(Symbol.length).toBe(0)
})

describe('Built-in Symbols', () => {
  test('Symbol.match is a symbol', () => {
    expect(typeof Symbol.match).toBe('symbol')
  })
  test('Symbol has Symbol(Symbol.match) printable representation', () => {
    expect(Symbol.match.toString()).toBe('Symbol(Symbol.match)')
  })
  test('RegExp.prototype[Symbol.match] is a function', () => {
    expect(typeof RegExp.prototype[Symbol.match]).toBe('function')
  })
})
