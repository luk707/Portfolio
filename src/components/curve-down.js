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
        <path d="M0,0 L0,100 L100,100 L100,33.31 C52.7333333,76.73 29.1,98.44 29.1,98.44 C21.98,104.83 14.73,91.36 10.08,63.11 C10.08,63.11 6.72,42.0733333 0,0 Z" />
      </svg>
    )
  }
}

// TODO: Fix the problem with flow + emotion
export default decoration(withTheme(CurveDown))
