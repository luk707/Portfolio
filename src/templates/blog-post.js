// @flow

import React from 'react'
import styled from '@emotion/styled'
import type { Theme } from '../util/theme'
import Layout from '../components/layout'
import Container from '../components/container'
import Content from '../components/content'
import { graphql, Link } from 'gatsby'
import Accent from '../components/accent'

// Import styles requied for katex
import 'katex/dist/katex.min.css'

const BrandedBackLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  ':before': {
    content: '"\\2190"',
    color: '#6C6072',
    fontFamily: 'Lucida Grande',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    paddingRight: 10,
  },
  marginLeft: -38,
  marginTop: 60,
  whiteSpace: 'nowrap',
  color: '#6C6072',
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
      <Content>
        <BrandedBackLink to="/">
          <strong>Luke</strong> Harris
        </BrandedBackLink>
      </Content>
    </Container>
    <div style={{ height: 60 }} />
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
        tags
      }
    }
  }
`
