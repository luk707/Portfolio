// @flow

import styled from '@emotion/styled'
import type { Theme } from '../util/theme'

const Footer = styled('footer')((props: { theme: Theme }) => ({
  backgroundColor: props.theme.colorPrimary,
}))

export default Footer
