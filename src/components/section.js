// @flow

import styled from 'react-emotion'
import { Theme } from '../theme'

type SectionProps = {
  theme: Theme,
}

const Section = styled('section')((props: SectionProps) => ({
  margin: `${props.theme.space.xl}px 0`,
  display: 'inline-block',
}))

export default Section
