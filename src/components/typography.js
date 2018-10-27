import styled from 'react-emotion'
import { Theme } from '../theme'

export const Brand = styled('h1')((props: { theme: Theme }) => ({
  border: `1rem solid ${props.theme.colorWhite}`,
  color: props.theme.colorWhite,
  margin: 0,
  padding: '0.2rem 1rem',
  display: 'inline-block',
  fontStyle: 'italic',
  textTransform: 'uppercase',
  fontSize: '4rem',
  strong: {
    fontSize: '4rem',
    fontWeight: 800,
  },
}))

export const HeroTitle = styled('h2')((props: { theme: Theme }) => ({
  color: props.theme.colorWhite,
  fontWeight: 400,
  fontSize: '2rem',
}))
