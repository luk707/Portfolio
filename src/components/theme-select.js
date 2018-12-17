import React, { Component } from 'react'
import { connect } from 'react-redux'
import changeTheme from '../actions/change-theme'
import defaultTheme, { darkTheme } from '../theme'

const themes = {
  default: defaultTheme,
  dark: darkTheme,
}

const themeOptions = [
  { value: 'default', text: 'Default' },
  { value: 'dark', text: 'Dark' },
]

class ThemeSelect extends Component {
  state = {
    selectedTheme: 'default',
  }
  handleChange = event => {
    const newTheme = event.target.value
    this.setState({ selectedTheme: newTheme })
    this.props.changeTheme(themes[newTheme])
  }
  render() {
    return (
      <select value={this.state.selectedTheme} onChange={this.handleChange}>
        {themeOptions.map(themeOption => (
          <option key={themeOption.value} value={themeOption.value}>
            {themeOption.text}
          </option>
        ))}
      </select>
    )
  }
}

export default connect(
  undefined,
  { changeTheme }
)(ThemeSelect)
