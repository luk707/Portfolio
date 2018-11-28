import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import BlogHeader from '../components/blog-header'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const BlogPost = ({ data }) => (
  <Layout>
    <BlogHeader
      image={
        <Img
          fluid={
            data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
          }
        />
      }
    />
    <Container dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    <pre>{JSON.stringify(data, null, 4)}</pre>
  </Layout>
)

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
