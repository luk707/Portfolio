// @flow

import React, { Component } from 'react'
import type { Theme } from '../theme'
import { withTheme } from 'emotion-theming'
import decoration from './decoration'

type CurveUpProps = {
  theme: Theme,
  offWhite: boolean,
  className?: string,
}

class CurveUp extends Component<CurveUpProps> {
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
        <path
          d={`
            M 100 100
            L 100 0
            L 0 0
            L 0 100
            C 100 -125, 100 100, 100 100
            Z
          `}
        />
      </svg>
    )
  }
}

export default decoration(withTheme(CurveUp))
