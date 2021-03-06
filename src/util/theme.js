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
  colorGreyDark: string,
  colorShadow: string,
  colorShadowLight: string,
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

export const defaultTheme: Theme = {
  colorPrimary: '#a413ec',
  colorPrimaryDark: darken(0.1, '#a413ec'),
  colorWhite: '#fff',
  colorOffWhite: '#f9f9f9',
  colorBlack: '#222',
  colorGrey: '#ddd',
  colorGreyLight: '#eee',
  colorGreyDark: '#545454',
  colorShadow: transparentize(0.9, '#000'),
  colorShadowLight: transparentize(0.98, '#000'),
  fontStack: '"Open Sans", Arial, sans-seif',
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

export const darkTheme: Theme = {
  colorPrimary: '#a413ec',
  colorPrimaryDark: darken(0.1, '#a413ec'),
  colorWhite: '#111',
  colorOffWhite: '#222',
  colorBlack: '#fff',
  colorGrey: '#333',
  colorGreyLight: '#444',
  colorGreyDark: '#545454',
  colorShadow: transparentize(0.9, '#000'),
  colorShadowLight: transparentize(0.95, '#000'),
  fontStack: '"Open Sans", Arial, sans-seif',
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
