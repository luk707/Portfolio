import React from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import defaultTheme from '../theme'
import Page from './page'

const Layout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Global
      styles={css`
        html {
          font-size: 62.5%;
          font-family: ${defaultTheme.fontStack};
          font-display: fallback;
        }

        body {
          margin: 0;
          background-color: ${defaultTheme.colorGreyLight};
        }

        * {
          font-size: 16px;
        }
      `}
    />
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Page>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
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
