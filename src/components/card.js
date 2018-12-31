// @flow

import styled from '@emotion/styled'
import type { Theme } from '../util/theme'

const Card = styled('div')((props: { theme: Theme }) => ({
  padding: props.theme.space.md,
  backgroundColor: props.theme.colorWhite,
  marginBottom: props.theme.space.md,
  borderRadius: 3,
  boxShadow: `0 6px 11px ${props.theme.colorShadowLight}`,
}))

export default Card
