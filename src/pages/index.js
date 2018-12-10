import React from 'react'
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
  // PostTitle,
  // Small,
} from '../components/typography'
import Footer from '../components/footer'
import CurveUp from '../components/curve-up'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import Row from '../components/row'
import BlogCard from '../components/blog-card'

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
          <BlogCard
            key={edge.node.id}
            title={edge.node.frontmatter.title}
            date={edge.node.frontmatter.date}
            readingTime={edge.node.fields.readingTime.text}
            slug={edge.node.fields.slug}
            excerpt={edge.node.excerpt}
            image={
              <div
                style={{
                  minWidth: 200,
                  marginRight: 20,
                }}
              >
                <Img
                  fluid={
                    edge.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                />
              </div>
            }
          />
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
                fluid(maxWidth: 200) {
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
