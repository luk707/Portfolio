import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const BlogPost = ({ data }) => (
  <Layout>
    <Img
      fluid={
        data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
      }
    />
    <pre>{JSON.stringify(data, null, 4)}</pre>
  </Layout>
)

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
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
