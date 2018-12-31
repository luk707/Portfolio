import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Theme } from '../util/theme'

const brandStyles = (props: { theme: Theme }) => ({
  whiteSpace: 'nowrap',
  border: `1rem solid ${props.theme.colorWhite}`,
  color: props.theme.colorWhite,
  margin: 0,
  padding: '0.2rem 1rem',
  display: 'inline-block',
  fontStyle: 'italic',
  textTransform: 'uppercase',
  fontSize: '4rem',
  fontWeight: 700,
  strong: {
    fontSize: '4rem',
    fontWeight: 800,
  },
  fontDisplay: 'swap',
})

export const Brand = styled('h1')(brandStyles)

export const FooterBrand = styled('h2')(brandStyles, {
  fontSize: '2rem',
  padding: '.1rem .5rem',
  borderWidth: '.5rem',
  strong: {
    fontSize: '2rem',
  },
})

export const copyFont = {
  fontFamily: "'Montserrat', sans-serif",
}

export const HeroTitle = styled('h2')(
  (props: { theme: Theme }) => ({
    color: props.theme.colorWhite,
    fontWeight: 900,
    fontSize: '2rem',
  }),
  copyFont
)

export const Title = styled('h3')(
  (props: { theme: Theme }) => ({
    fontWeight: 900,
    fontSize: '3.8rem',
    marginTop: 0,
    color: '#362C3C',
  }),
  copyFont
)

export const Copy = styled.p({ fontSize: 18, color: '#6C6072' }, copyFont)

export const PostTitle = styled(Link)(
  (props: { theme: Theme }) => ({
    display: 'block',
    fontWeight: 900,
    fontSize: '2.4rem',
    marginBottom: '1rem',
    color: '#853AAA',
  }),
  copyFont
)

export const Small = styled('small')(
  (props: { theme: Theme }) => ({
    fontWeight: 400,
    fontSize: '1.4rem',
    color: '#6C6072',
  }),
  copyFont
)
