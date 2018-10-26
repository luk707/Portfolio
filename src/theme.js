// @flow

import { transparentize, darken } from 'polished'

export type Theme = {
  colorPrimary: string,
  colorPrimaryDark: string,
  colorWhite: string,
  colorBlack: string,
  colorGrey: string,
  colorShadow: string,
  fontStack: string,
}

const defaultTheme: Theme = {
  colorPrimary: '#9540bf',
  colorPrimaryDark: darken(0.1, '#9540bf'),
  colorWhite: '#fff',
  colorBlack: '#222',
  colorGrey: '#ddd',
  colorShadow: transparentize(0.9, '#000'),
  fontStack: '"Open Sans", sans-seif',
}

export default defaultTheme
