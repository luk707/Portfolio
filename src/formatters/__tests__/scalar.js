// @flow

import scalar from '../scalar'

describe('scalar', () => {
  it('returns correct result when no configuration is specified', () => {
    expect(scalar({}, 12345)).toBe('12345')
  })
  it('seperates comma values correctly', () => {
    expect(scalar({ comma: true }, 12345)).toBe('12,345')
    expect(scalar({ comma: true }, 12345.67)).toBe('12,345.67')
  })
  it('unit defaults to displaying immediatley behind number', () => {
    expect(scalar({ unit: '%' }, 12.34)).toBe('12.34%')
  })
  it('supports custom display', () => {
    expect(
      scalar(
        { unit: '£', display: ({ value, unit }) => `${unit}${value}` },
        12.34
      )
    ).toBe('£12.34')
    expect(
      scalar(
        { unit: 'miles', display: ({ value, unit }) => `${value} ${unit}` },
        12.34
      )
    ).toBe('12.34 miles')
  })
  it('supports conversion', () => {
    expect(scalar({ convert: value => value * 2 }, 2)).toBe('4')
    expect(scalar({ convert: value => value * 2 }, 4)).toBe('8')
  })
  it('supports custom number of decimal places and rounds places correctly', () => {
    expect(scalar({ decimals: 0 }, 123.456)).toBe('123')
    expect(scalar({ decimals: 0 }, 234.567)).toBe('235')
    expect(scalar({ decimals: 2 }, 654.321)).toBe('654.32')
    expect(scalar({ decimals: 2 }, 123.456)).toBe('123.46')
  })
})
