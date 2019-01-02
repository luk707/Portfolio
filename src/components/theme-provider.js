import React, { Component } from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { defaultTheme } from '../util/theme'

class ThemeProvider extends Component {
  render() {
    return (
      <EmotionThemeProvider theme={defaultTheme}>
        <Global
          styles={css`
            html {
              font-size: 62.5%;
              font-family: ${defaultTheme.fontStack};
              font-display: fallback;
            }

            body {
              margin: 3;
              background-color: ${defaultTheme.colorGreyLight};
            }

            a,
            p {
              font-size: 16px;
            }

            .katex {
              font-size: 2em !important;
            }
          `}
        />
        {this.props.children}
      </EmotionThemeProvider>
    )
  }
}

export default ThemeProvider
