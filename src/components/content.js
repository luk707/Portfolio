// @flow

import styled from '@emotion/styled'
import { transparentize } from 'polished'
import type { Theme } from '../util/theme'
import { atLeast } from '../utils'

export default styled.div(({ theme }: { theme: Theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  margin: 'auto',
  maxWidth: 600,
  padding: '0 20px 0 20px',
  '.mobile-full-width': {
    display: 'block',
    width: '100vw',
    margin: '0 -40px 0 -40px',
    [atLeast(theme.breakpoints.xs)]: {
      display: 'inline',
      width: '100%',
      margin: 0,
    },
  },
  p: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '28px',
    color: '#6C6072',
  },
  'p > a': {
    fontSize: '18px',
    textDecoration: 'none',
    color: theme.colorBlack,
    backgroundColor: transparentize(0.9, theme.colorPrimary),
    borderBottom: `1px solid ${transparentize(0.7, theme.colorPrimary)}`,
    ':hover': {
      backgroundColor: transparentize(0.8, theme.colorPrimary),
      borderBottomColor: transparentize(0.6, theme.colorPrimary),
    },
  },
  'p > code': {
    backgroundColor: transparentize(0.6, '#f4d142'),
  },
  pre: {
    fontSize: 18,
    color: theme.colorGrey,
    backgroundColor: theme.colorBlack,
    padding: 10,
    borderRadius: 3,
    overflow: 'auto',
  },
  small: {
    display: 'block',
    fontSize: '18px',
    fontWeight: 400,
    color: '#A099A3',
    marginTop: 5,
  },
  h1: {
    fontSize: '38px',
    fontWeight: 900,
    color: '#362C3C',
    maxWidth: 380,
    marginTop: 40,
    marginBottom: 0,
  },
  h2: {
    color: '#413547',
  },
  h3: {
    color: '#5E5264',
  },
  h4: {
    color: '#847B89',
  },
  'h2, h3, h4': {
    fontSize: '28px',
    fontWeight: 900,
    '.anchor': {
      paddingTop: 8,
      paddingRight: 10,
      marginLeft: -30,
    },
  },
  ul: {
    listStyle: 'none',
    paddingLeft: 37,
    marginBottom: 30,
  },
  'ul > li': {
    marginBottom: 15,
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '28px',
    color: '#6C6072',
    ':before': {
      content: '" "',
      height: 22,
      width: 22,
      display: 'block',
      float: 'left',
      marginLeft: -37,
      marginTop: 3,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundImage: `url("data:image/svg+xml;utf8,<svg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g transform='translate(-203.000000, -717.000000)'><g transform='translate(202.000000, 622.000000)'><g transform='translate(0.000000, 94.000000)'><g transform='translate(1.000000, 1.000000)'><circle fill='%23E6B4FF' cx='10' cy='10' r='10'></circle><path d='M8,12.59 L14.3,6.29 C14.6991459,5.95283474 15.290578,5.97978463 15.6574061,6.35185316 C16.0242342,6.72392169 16.0427927,7.31567649 15.7,7.71 L8.7,14.71 C8.31115649,15.0911429 7.68884351,15.0911429 7.3,14.71 L4.3,11.71 C3.9572073,11.3156765 3.97576579,10.7239217 4.34259392,10.3518532 C4.70942204,9.97978463 5.3008541,9.95283474 5.7,10.29 L8,12.59 Z' id='Path' fill='%23A413EC'></path></g></g></g></g></g></svg>")`,
    },
  },
}))
