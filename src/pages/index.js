import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import Section from '../components/section'
import { Small } from '../components/typography'
import { graphql } from 'gatsby'
import BlogCard from '../components/blog-card'
import Accent from '../components/accent'
import styled from '@emotion/styled'

const Brand = styled.span(({ theme }: { theme: Theme }) => ({
  whiteSpace: 'nowrap',
  color: '#6C6072',
  fontFamily: `${theme.fontStack}`,
  padding: '0.2rem 0',
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

const IndexPage = ({ data }) => (
  <Layout>
    <Accent />
    <Section>
      <Container>
        <Brand>
          <strong>Luke</strong> Harris
        </Brand>
        <div style={{ marginTop: 10, marginBottom: 40 }}>
          <Small>Personal blog</Small>
        </div>
        {console.log(data)}
        {data.allMarkdownRemark.edges.map(edge => (
          <BlogCard
            key={edge.node.id}
            title={edge.node.frontmatter.title}
            date={edge.node.frontmatter.date}
            readingTime={edge.node.fields.readingTime.text}
            slug={edge.node.fields.slug}
            excerpt={edge.node.excerpt}
          />
        ))}
      </Container>
    </Section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { draft: { ne: true }, templateKey: { eq: "blog-post" } }
      }
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
            date(formatString: "DD MMM ‘YY")
          }
        }
      }
    }
  }
`
