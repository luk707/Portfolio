// @flow

export default function splitDecimalString(
  numberString: string
): [string, string] {
  const [base, fraction] = numberString.split('.')
  return [base || '0', fraction || '']
}
