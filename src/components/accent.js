// @flow

import styled from '@emotion/styled'
import type { Theme } from '../util/theme'

export default styled.div(({ theme }: { theme: Theme }) => ({
  height: 6,
  width: '100%',
  backgroundColor: theme.colorPrimary,
}))
