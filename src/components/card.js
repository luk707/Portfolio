// @flow

import styled from 'react-emotion'
import type { Theme } from '../theme'

const Card = styled('div')((props: { theme: Theme }) => ({
  padding: props.theme.space.md,
  borderWidth: 1,
  borderStyle: 'solid',
  backgroundColor: props.theme.colorWhite,
  borderColor: props.theme.colorGrey,
  marginBottom: props.theme.space.md,
}))

export default Card
