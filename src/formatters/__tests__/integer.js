// @flow

import integer from '../integer'

describe('integer', () => {
  it('rounds numbers to nearest whole integer', () => {
    expect(integer({}, 1234.56)).toBe('1235')
  })
  it('supports commas', () => {
    expect(integer({ comma: true }, 1234.56)).toBe('1,235')
  })
})
