// @flow

import styled from '@emotion/styled'
import type { Theme } from '../util/theme'

type SectionProps = {
  theme: Theme,
}

const Section = styled('section')((props: SectionProps) => ({
  padding: `${props.theme.space.xl}px 0`,
}))

export default Section
