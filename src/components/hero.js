// @flow

import styled from 'react-emotion'
import background from '../../static/img/hero-background.svg'
import { Theme } from '../theme'

const Hero = styled('div')((props: { theme: Theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundColor: props.theme.colorPrimary,
}))

export default Hero
