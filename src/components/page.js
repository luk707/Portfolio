// @flow

import styled from '@emotion/styled'
import type { Theme } from '../util/theme'
import { transparentize } from 'polished'

type PageProps = {
  theme: Theme,
}

const Page = styled('div')((props: PageProps) => ({
  backgroundColor: props.theme.colorOffWhite,
  maxWidth: props.theme.breakpoints.lg,
  margin: '10px auto',
  borderRadius: 3,
  boxShadow: `0 6px 11px ${transparentize(0.8, props.theme.colorShadowLight)}`,
}))

export default Page
