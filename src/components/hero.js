// @flow

import styled from '@emotion/styled'
import background from '../../static/img/hero-background.svg'
import type { Theme } from '../util/theme'

const Hero = styled('div')((props: { theme: Theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundColor: props.theme.colorPrimary,
}))

export default Hero
