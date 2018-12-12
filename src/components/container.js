// @flow

import styled from 'react-emotion'
import type { Theme } from '../theme'
import { atLeast } from '../utils'

type ContainerProps = {
  theme: Theme,
  fluid?: number,
}

const Container = styled('div')((props: ContainerProps) => ({
  margin: 'auto',
  width: props.fluid ? `${(props.fluid * 100).toFixed(2)}%` : '100%',
  padding: `0 ${props.theme.space.lg}px`,
  ...(props.fluid
    ? {}
    : Object.keys(props.theme.breakpoints)
        .filter(bp => !~['xl', 'lg'].indexOf(bp))
        .map(bp => props.theme.breakpoints[bp])
        .map(bp => ({
          [atLeast(bp)]: {
            maxWidth: bp - props.theme.space.lg * 2,
            padding: 0,
          },
        }))
        .reduce((acc, cur) => ({ ...acc, ...cur }), {})),
}))

export default Container
