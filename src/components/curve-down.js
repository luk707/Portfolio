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
        <path
          d={`
            M 0 0
            L 0 100
            L 100 100
            L 100 0
            C 0 225, 0 0, 0 0
            Z
          `}
        />
      </svg>
    )
  }
}

export default decoration(withTheme(CurveDown))
