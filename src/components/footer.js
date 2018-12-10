// @flow

import styled from 'react-emotion'
import type { Theme } from '../theme'

const Footer = styled('footer')((props: { theme: Theme }) => ({
  backgroundColor: props.theme.colorPrimary,
}))

export default Footer
