// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'
import Card from '../card'
import defaultTheme from '../../theme'

describe('card', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Card>This is a test card</Card>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
