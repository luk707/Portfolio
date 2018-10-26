// @flow

import { transparentize } from 'polished'

export type Theme = {
  colorWhite: string,
  colorBlack: string,
  colorGrey: string,
  colorShadow: string,
  fontStack: string,
}

const defaultTheme: Theme = {
  colorWhite: '#fff',
  colorBlack: '#222',
  colorGrey: '#ddd',
  colorShadow: transparentize(0.9, '#000'),
  fontStack: '"Open Sans", sans-seif',
}

export default defaultTheme
