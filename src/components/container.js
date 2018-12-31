// @flow

import styled from '@emotion/styled'
import type { Theme } from '../util/theme'
import { atLeast } from '../utils'

type ContainerProps = {
  theme: Theme,
}

const Container = styled('div')((props: ContainerProps) => ({
  margin: 'auto',
  padding: `0 ${props.theme.space.sm}px`,
  ...Object.keys(props.theme.breakpoints)
    .filter(bp => !~['xl', 'lg'].indexOf(bp))
    .map(bp => props.theme.breakpoints[bp])
    .map(bp => ({
      [atLeast(bp)]: {
        maxWidth: bp - props.theme.space.md * 2,
        padding: 0,
      },
    }))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {}),
}))

export default Container
