// @flow

import styled from '@emotion/styled'
import type { Theme } from '../util/theme'
import { atLeast } from '../utils'

type ContainerProps = {
  theme: Theme,
  fluid?: number,
}

const Container = styled('div')((props: ContainerProps) => ({
  margin: 'auto',
  width: props.fluid ? `${(props.fluid * 100).toFixed(2)}%` : '100%',
  ...(props.fluid
    ? {
        minWidth: '75%',
        [atLeast(props.theme.breakpoints.sm)]: {
          minWidth: 'unset',
        },
      }
    : {}),
  padding: `0 ${props.theme.space.md}px`,
  ...(props.fluid
    ? {}
    : Object.keys(props.theme.breakpoints)
        .filter(bp => !~['xl', 'lg'].indexOf(bp))
        .map(bp => props.theme.breakpoints[bp])
        .map(bp => ({
          [atLeast(bp)]: {
            maxWidth: bp - props.theme.space.md * 2,
            padding: 0,
          },
        }))
        .reduce((acc, cur) => ({ ...acc, ...cur }), {})),
}))

export default Container
