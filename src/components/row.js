// @flow

import styled from 'react-emotion'
import { atLeast } from '../utils'

const Row = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  [atLeast(900)]: {
    flexDirection: 'row',
  },
})

export default Row
