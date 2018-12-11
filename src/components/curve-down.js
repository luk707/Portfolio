// @flow

import React, { Component } from 'react'
import type { Theme } from '../theme'
import { withTheme } from 'emotion-theming'
import decoration from './decoration'

type CurveDownProps = {
  theme: Theme,
  offWhite: boolean,
  className?: string,
}

class CurveDown extends Component<CurveDownProps> {
  render() {
    return (
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        fill={this.props.theme.colorOffWhite}
        className={this.props.className}
      >
        <path d="M0,0 L8.46108082,65.7651808 C11.6284958,90.3844492 18.5441912,103.383413 25.3043272,97.4242887 L100,31.5793426 L100,100 L0,100 L0,0 Z" />
      </svg>
    )
  }
}

export default decoration(withTheme(CurveDown))
