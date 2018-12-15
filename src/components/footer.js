// @flow

import styled from '@emotion/styled'
import type { Theme } from '../theme'

const Footer = styled('footer')((props: { theme: Theme }) => ({
  backgroundColor: props.theme.colorPrimary,
}))

export default Footer
