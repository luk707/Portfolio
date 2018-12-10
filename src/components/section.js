// @flow

import styled from 'react-emotion'
import type { Theme } from '../theme'

type SectionProps = {
  theme: Theme,
}

const Section = styled('section')((props: SectionProps) => ({
  padding: `${props.theme.space.xl}px 0`,
}))

export default Section
