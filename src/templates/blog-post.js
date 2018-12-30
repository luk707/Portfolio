// @flow

import React from 'react'
import styled from '@emotion/styled'
import type { Theme } from '../util/theme'
import Layout from '../components/layout'
import Container from '../components/container'
import Content from '../components/content'
// import BlogHeader from '../components/blog-header'
import { graphql, Link } from 'gatsby'
// import Img from 'gatsby-image'
import Accent from '../components/accent'
import Footer from '../components/footer'
import CurveUp from '../components/curve-up'
import Section from '../components/section'
import { FooterBrand, HeroTitle } from '../components/typography'
import { LinkButton } from '../components/button'

const BrandedBackLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  ':before': {
    content: '"\\2190"',
    color: '#9A939D',
    fontFamily: 'Lucida Grande',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    paddingRight: 10,
  },
  marginLeft: -38,
  display: 'inline-block',
  marginTop: 60,
  whiteSpace: 'nowrap',
  color: '#9A939D',
  fontFamily: `${theme.fontStack}`,
  padding: '0.2rem 1rem',
  display: 'inline-block',
  fontStyle: 'italic',
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 700,
  strong: {
    fontSize: '18px',
    fontWeight: 800,
  },
}))

const BlogPost = ({ data }) => (
  <Layout>
    <Accent />
    {/* <BlogHeader
      image={
        <Img
          fluid={
            data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
          }
        />
      }
    /> */}
    <Container>
      <Content>
        <BrandedBackLink to="/">
          <strong>Luke</strong> Harris
        </BrandedBackLink>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <small>
          {data.markdownRemark.frontmatter.date} &middot;{' '}
          {data.markdownRemark.fields.readingTime.text}
        </small>
      </Content>
      <Content dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Container>
    <div style={{ height: '60px' }} />
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

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date(formatString: "DD MMM ‘YY")
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`
