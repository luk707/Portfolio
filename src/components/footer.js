// @flow

import styled from 'react-emotion'
import { Theme } from '../theme'

const Footer = styled('footer')((props: { theme: Theme }) => ({
  backgroundColor: props.theme.colorPrimary,
}))

export default Footer
