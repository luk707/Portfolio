// @flow

import { transparentize, darken } from 'polished'

export type Theme = {
  colorPrimary: string,
  colorPrimaryDark: string,
  colorWhite: string,
  colorOffWhite: string,
  colorBlack: string,
  colorGrey: string,
  colorGreyLight: string,
  colorShadow: string,
  fontStack: string,
  breakpoints: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
  },
  space: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
  },
}

const defaultTheme: Theme = {
  colorPrimary: '#9540bf',
  colorPrimaryDark: darken(0.1, '#9540bf'),
  colorWhite: '#fff',
  colorOffWhite: '#f9f9f9',
  colorBlack: '#222',
  colorGrey: '#ddd',
  colorGreyLight: '#eee',
  colorShadow: transparentize(0.9, '#000'),
  fontStack: '"Open Sans", sans-seif',
  breakpoints: {
    xs: 400,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1440,
  },
  space: {
    xs: 2,
    sm: 8,
    md: 20,
    lg: 30,
    xl: 60,
  },
}

export default defaultTheme
