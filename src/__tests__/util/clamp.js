// @flow

import clamp from '../../util/clamp'

describe('clamp', () => {
  it('returns value when it is within range of min and max', () => {
    expect(clamp(5, 1, 10)).toBe(5)
  })
  it('returns min when value is less than min', () => {
    expect(clamp(1, 5, 10)).toBe(5)
  })
  it('returns max when value is larger than max', () => {
    expect(clamp(10, 1, 5)).toBe(5)
  })
})
