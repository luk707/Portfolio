// @flow

import styled from 'react-emotion'
import { atLeast } from '../utils'

const Row = styled('div')({
  display: 'flex',
  flexDirection: 'column-reverse',
  [atLeast(900)]: {
    flexDirection: 'row',
  },
  justifyContent: 'space-between',
  marginBottom: '1rem',
})

export default Row
