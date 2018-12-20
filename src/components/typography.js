import styled from '@emotion/styled'
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

export const HeroTitle = styled('h2')((props: { theme: Theme }) => ({
  color: props.theme.colorWhite,
  fontWeight: 400,
  fontSize: '2rem',
}))

export const Title = styled('h3')((props: { theme: Theme }) => ({
  color: props.theme.colorBlack,
  fontWeight: 400,
  fontSize: '2.8rem',
}))

export const PostTitle = styled('h4')((props: { theme: Theme }) => ({
  color: props.theme.colorBlack,
  fontWeight: 400,
  fontSize: '2.4rem',
  marginTop: '3rem',
}))

export const Small = styled('small')((props: { theme: Theme }) => ({
  color: props.theme.colorGreyDark,
  fontWeight: 400,
  fontSize: '1.4rem',
}))
