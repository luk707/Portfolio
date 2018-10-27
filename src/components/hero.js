import styled from 'react-emotion'
import background from '../images/hero-background.svg'

const Hero = styled('div')({
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
})

export default Hero
