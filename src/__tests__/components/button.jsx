// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'
import Button from '../../components/button'
import defaultTheme from '../../util/theme'

describe('card', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Button>Hello world</Button>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
