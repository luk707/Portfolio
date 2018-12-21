# Button

Communicate an action that the user can take by using the button component.

This button component supports theming with emotion and multiple states such as default and primary.

In order to use this component you must provide the following variables to the emotion theme provider.

```jsx
import { ThemeProvider } from 'emotion-theming'
import { transparentize, darken } from 'polished'

export default () => (
  <ThemeProvider
    theme={{
      fontStack: '"Open Sans", Arial, sans-seif',
      colorShadow: transparentize(0.9, '#000'),
      colorWhite: '#fff',
      colorPrimary: '#a413ec',
      colorPrimaryDark: darken(0.1, '#a413ec'),
      colorBlack: '#222',
      colorGrey: '#ddd',
    }}
  >
    {yourApplication}
  </ThemeProvider>
)
```

You can also use one of the preset themes available from the theme utility

```jsx
import { ThemeProvider } from 'emotion-theming'
import { darkTheme } from '@bit/luk707.library.util.theme'

export default () => (
  <ThemeProvider theme={darkTheme}>{yourApplication}</ThemeProvider>
)
```

To use the component, simply import it. It takes an `onClick` prop much like a standard react `button` tag.

```jsx
import Button from '@bit/luk707.library.components.button'

export default () => (
  <Button onClick={() => alert('Hello world!')}>Hello world!</Button>
)
```

The button also supports multiple prominences, including `default`, `primary`:

```jsx
import Button from '@bit/luk707.library.components.button'

export default () => (
  <Button prominence="primary" onClick={() => alert('Hello world!')}>
    Hello world!
  </Button>
)
```

You can style any component to look like a button. This can be particularly useful if you need to style a page link to look like a button:

```jsx
import Button from '@bit/luk707.library.components.button'

const LinkButton = Button.withComponent('a')

export default () => (
  <LinkButton href="https://www.google.com/">Hello world!</LinkButton>
)
```

There is currently a LinkedButton named export of the button package that returns a `Button.withComponent(Link)`. This will be removed in a future release such that application that do not use gatsby don't have to list it as a dependency.
