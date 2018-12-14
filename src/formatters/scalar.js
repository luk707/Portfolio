// @flow

type ScalarFormatterConfig = {
  comma?: boolean,
  unit?: string,
  display?: ({ value: number, unit: string }) => string,
  convert?: (value: number) => number,
  decimals?: number,
}

export default function(
  config: ScalarFormatterConfig = {
    comma: false,
    display: ({ value, unit }) => `${value}${unit}`,
    convert: v => v,
  },
  value: number
): string {
  // TODO: Implement scalar formatter
  return ''
}
