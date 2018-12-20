// @flow

import styled from '@emotion/styled'
import type { Theme } from '../util/theme'

type PageProps = {
  theme: Theme,
}

const Page = styled('div')((props: PageProps) => ({
  backgroundColor: props.theme.colorOffWhite,
  maxWidth: props.theme.breakpoints.lg,
  margin: 'auto',
}))

export default Page
