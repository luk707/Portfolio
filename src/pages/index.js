import React from 'react'
import Layout from '../components/layout'
import { LinkButton } from '../components/button'
import Container from '../components/container'
import Hero from '../components/hero'
import CurveDown from '../components/curve-down'
import Section from '../components/section'
import { Brand, FooterBrand, HeroTitle } from '../components/typography'
import Footer from '../components/footer'
import CurveUp from '../components/curve-up'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero>
      <Section>
        <Container>
          <Brand>
            <strong>Luke</strong> Harris
          </Brand>
          <HeroTitle>
            I'm a front-end web developer from Peterborough, UK
          </HeroTitle>
          <div>
            <LinkButton to="/page-2/">Go to page 2</LinkButton>
          </div>
        </Container>
      </Section>
      <CurveDown aspectWidth={10} aspectHeight={1} />
    </Hero>
    <Section>
      <Container>
        <h1>Homepage</h1>
        <LinkButton prominence="primary" to="/page-2/">
          Go to page 2
        </LinkButton>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </Container>
    </Section>
    <Footer>
      <CurveUp top aspectWidth={10} aspectHeight={1} />
      <Section>
        <Container>
          <div style={{ textAlign: 'right' }}>
            <FooterBrand>
              <strong>Luke</strong> Harris
            </FooterBrand>
          </div>
          <HeroTitle>
            I'm a front-end web developer from Peterborough, UK
          </HeroTitle>
          <div>
            <LinkButton to="/page-2/">Go to page 2</LinkButton>
          </div>
        </Container>
      </Section>
    </Footer>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
