// @flow

import styled from 'react-emotion'
import { Theme } from '../theme'
import { atLeast } from '../utils'

type ContainerProps = {
  theme: Theme,
}

const Container = styled('div')((props: ContainerProps) => ({
  margin: 'auto',
  maxWidth: '100%',
  padding: `0 ${props.theme.space.md}rem`,
  ...Object.keys(props.theme.breakpoints)
    .filter(bp => bp !== 'xl')
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
