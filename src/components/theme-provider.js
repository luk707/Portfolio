import React, { Component } from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { connect } from 'react-redux'

class ThemeProvider extends Component {
  render() {
    return (
      <EmotionThemeProvider theme={this.props.theme}>
        <Global
          styles={css`
            html {
              font-size: 62.5%;
              font-family: ${this.props.theme.fontStack};
              font-display: fallback;
            }

            body {
              margin: 0;
              background-color: ${this.props.theme.colorGreyLight};
            }

            * {
              font-size: 16px;
            }
          `}
        />
        {this.props.children}
      </EmotionThemeProvider>
    )
  }
}

export default connect(state => ({
  theme: state.theme,
}))(ThemeProvider)
