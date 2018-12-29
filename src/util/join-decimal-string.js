// @flow

export default function joinDecimalString(
  base: string,
  decimal?: string
): string {
  if (decimal) {
    return `${base}.${decimal}`
  }
  return base
}
