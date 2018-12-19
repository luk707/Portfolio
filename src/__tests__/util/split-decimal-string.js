// @flow

import splitDecimalString from '../../util/split-decimal-string'

describe('splitDecimalString', () => {
  it('returns correct base and decimal string', () => {
    const [base, decimal] = splitDecimalString('12.34')
    expect(base).toBe('12')
    expect(decimal).toBe('34')
  })
  it('sets decimal to empty string when there is no decimal place', () => {
    const [, decimal] = splitDecimalString('12')
    expect(decimal).toBe('')
  })
  it('sets base number to 0 when it is not specified', () => {
    const [base] = splitDecimalString('.12')
    expect(base).toBe('0')
  })
})
