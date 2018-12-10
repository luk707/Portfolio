// @flow

import styled from 'react-emotion'
import type { Theme } from '../theme'

type PageProps = {
  theme: Theme,
}

const Page = styled('div')((props: PageProps) => ({
  backgroundColor: props.theme.colorOffWhite,
  maxWidth: props.theme.breakpoints.lg,
  margin: 'auto',
}))

export default Page
