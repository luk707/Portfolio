// @flow

import chunkRight from '../../util/chunk-right'

describe('chunkRight', () => {
  it('returns correct number of chunks', () => {
    const result = chunkRight([1, 2, 3, 4, 5], 3)
    expect(result[0]).toBeDefined
    expect(result[1]).toBeDefined
    expect(result[2]).not.toBeDefined
  })
  it("returns it's smallest chunk first", () => {
    const result = chunkRight([1, 2, 3, 4, 5], 3)
    expect(result[0].length).toBe(2)
    expect(result[1].length).toBe(3)
  })
  it('returns array of arrays', () => {
    const result = chunkRight([1, 2, 3, 4, 5], 3)
    expect(Array.isArray(result)).toBe(true)
    result.forEach(chunk => {
      expect(Array.isArray(chunk)).toBe(true)
    })
  })
})
