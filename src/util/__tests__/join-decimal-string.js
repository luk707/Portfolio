// @flow

import joinDecimalString from '../join-decimal-string'

describe('joinDecimalString', () => {
  it("concatenates base and decimal strings together with a '.' character between them", () => {
    expect(joinDecimalString('123', '45')).toBe('123.45')
  })
  it("omits the '.' character if decimal is empty string or undefined", () => {
    expect(joinDecimalString('123')).toBe('123')
    expect(joinDecimalString('123', undefined)).toBe('123')
    expect(joinDecimalString('123', '')).toBe('123')
  })
})
