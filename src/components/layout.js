import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ThemeProvider from './theme-provider'
import Page from './page'

const Layout = ({ children }) => (
  <ThemeProvider>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              siteUrl
              twitterHandle
            }
          }
        }
      `}
      render={data => (
        <Page>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              { name: 'og:title', content: data.site.siteMetadata.title },
              {
                name: 'og:description',
                content: data.site.siteMetadata.description,
              },
              {
                name: 'og:image',
                content:
                  'https://www.gravatar.com/avatar/094ce9141be09989c1f9634ae02183fa?s=240',
              },
              { name: 'og:type', content: 'website' },
              { name: 'og:site_name', content: data.site.siteMetadata.title },
              { name: 'og:url', content: data.site.siteMetadata.siteUrl },
              { name: 'twitter:card', content: 'summary' },
              {
                name: 'twitter:site',
                content: data.site.siteMetadata.twitterHandle,
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.twitterHandle,
              },
              { name: 'twitter:title', content: data.site.siteMetadata.title },
              {
                name: 'twitter:description',
                content: data.site.siteMetadata.title,
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {children}
        </Page>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
