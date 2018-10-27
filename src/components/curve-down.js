// @flow

import React, { Component } from 'react'
import { Theme } from '../theme'
import { withTheme } from 'emotion-theming'

type CurveDownProps = {
  theme: Theme,
  offWhite: boolean,
}

class CurveDown extends Component<CurveDownProps> {
  render() {
    return (
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100px"
        preserveAspectRatio="none"
        fill={this.props.theme.colorOffWhite}
        style={{ display: 'block' }}
      >
        <path
          d={`
            M 0 0
            L 0 200
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

export default withTheme(CurveDown)
