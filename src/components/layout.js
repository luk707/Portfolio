import React from 'react'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import defaultTheme from '../theme'

injectGlobal`
  html {
    font-size: 62.5%;
    font-family: ${defaultTheme.fontStack};
  }

  body {
    margin: 0;
    background-color: ${defaultTheme.colorGreyLight};
  }

  * { font-size: 16px }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
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
        <>
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
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
