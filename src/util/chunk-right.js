// @flow

import takeRight from 'lodash/takeRight'

export default function chunkRight<T>(
  values: Array<T>,
  chunkSize: number
): Array<Array<T>> {
  const buffer = [...values]
  const result = []
  while (buffer.length > chunkSize) {
    result.push(takeRight(buffer, chunkSize))
    buffer.splice(-chunkSize, chunkSize)
  }
  result.push(buffer)
  result.reverse()
  return result
}
