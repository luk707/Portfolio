// @flow

import React, { Component } from 'react'
import type { Theme } from '../util/theme'
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
        <path d="M0,0 C33.6666667,65.6666667 50,98.5 50,98.5 C50.67,99.83 51.33,99.83 52,98.5 C52,98.5 68.3333333,65.6666667 100,0 L100,100 L0,100 L0,0 Z" />
      </svg>
    )
  }
}

// TODO: Fix the problem with flow + emotion
export default decoration(withTheme(CurveDown))
