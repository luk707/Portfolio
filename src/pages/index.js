import React, { Fragment } from 'react'
import Layout from '../components/layout'
import { LinkButton } from '../components/button'
import Container from '../components/container'
import Hero from '../components/hero'
import CurveDown from '../components/curve-down'
import Section from '../components/section'
import {
  Brand,
  Title,
  FooterBrand,
  HeroTitle,
  PostTitle,
  Small,
} from '../components/typography'
import Footer from '../components/footer'
import CurveUp from '../components/curve-up'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Row from '../components/row'

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
        <Title>Recent posts</Title>
        {data.allMarkdownRemark.edges.map(edge => (
          <Row key={edge.node.id}>
            <div>
              <PostTitle>{edge.node.frontmatter.title}</PostTitle>
              <div style={{ marginBottom: '1rem' }}>
                <p>{edge.node.excerpt}</p>
                <Small>
                  {edge.node.frontmatter.date} &middot;{' '}
                  {edge.node.fields.readingTime.text}
                </Small>
              </div>
              <LinkButton to={edge.node.fields.slug}>Read more</LinkButton>
            </div>
            <Img
              style={{ width: '100%', maxWidth: 300, flexShrink: 0 }}
              fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
            />
          </Row>
        ))}
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
          excerpt(pruneLength: 130)
          fields {
            slug
            readingTime {
              text
            }
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
            date(formatString: "MMM DD")
          }
        }
      }
    }
  }
`
