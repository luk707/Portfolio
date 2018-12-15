// @flow

import curry from 'lodash/curry'
import integer from './integer'
import chunkRight from '../util/chunk-right'
import clamp from '../util/clamp'
import splitDecimalString from '../util/split-decimal-string'
import joinDecimalString from '../util/join-decimal-string'

type ScalarFormatterConfig = {
  comma?: boolean,
  unit?: string,
  display?: ({ value: string, unit: string }) => string,
  convert?: (value: number) => number,
  decimals?: number,
}

function getFixedString(value: number, decimals?: number): string {
  if (typeof decimals !== 'undefined') {
    return value.toFixed(clamp(decimals, 0, 20))
  }
  return value.toString()
}

export default function scalar(
  {
    comma = false,
    display = ({ value, unit }) => `${value}${unit}`,
    convert = v => v,
    unit = '',
    decimals,
  }: ScalarFormatterConfig = {},
  value: number
): string {
  const fixedString = getFixedString(convert(value), decimals)
  const [base, decimal] = splitDecimalString(fixedString)
  const chunkedBase = integer({ comma }, parseInt(base))
  const displayString = joinDecimalString(chunkedBase, decimal)
  return display({ value: displayString, unit })
}
