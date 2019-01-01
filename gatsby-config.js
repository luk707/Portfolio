var markdown = require('markdown').markdown

module.exports = {
  siteMetadata: {
    title: 'Luke Harris',
    description: "Luke Harris' personal blog.",
    siteUrl: 'https://lukeharris.io',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-flow',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`,
        name: 'static',
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#a413ec',
        theme_color: '#9540bf',
        display: 'minimal-ui',
        icon: 'static/img/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Open+Sans:400,700,700i,800i', // you can also specify font weights and styles
          'Montserrat:400,400i,700,900',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-katex',
          'gatsby-remark-reading-time',
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              // offsetY: `100`,
              icon:
                '<svg aria-hidden="true" width="20px" height="18px" viewBox="0 0 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1.000000, -2.000000)" fill="#867F8A"><g transform="translate(0.000000, 2.000000)"><path d="M18.48,10.03 L18.46,10 C18.1893805,9.51675084 18.3617508,8.90561953 18.845,8.635 C19.3282492,8.36438047 19.9393805,8.53675084 20.21,9.02 C21.2728139,10.8773019 21.2660078,13.1600695 20.1921378,15.0110009 C19.1182678,16.8619323 17.1398933,18.0008389 15,18 L11,18 C7.6862915,18 5,15.3137085 5,12 C5,8.6862915 7.6862915,6 11,6 L12,6 C12.5522847,6 13,6.44771525 13,7 C13,7.55228475 12.5522847,8 12,8 L11,8 C8.790861,8 7,9.790861 7,12 C7,14.209139 8.790861,16 11,16 L15,16 C16.4226683,15.9995555 17.7380383,15.2434994 18.4544956,14.0144045 C19.1709529,12.7853096 19.1806642,11.268166 18.48,10.03 Z M3.52,7.97 L3.54,8 C3.71506015,8.31260739 3.71004833,8.69486201 3.52685246,9.00277224 C3.34365659,9.31068247 3.01010847,9.49746942 2.65185245,9.49277225 C2.29359643,9.48807508 1.96506013,9.2926074 1.79,8.98 C0.727186099,7.12269806 0.733992175,4.83993052 1.80786218,2.98899911 C2.88173219,1.13806769 4.86010673,-0.000838853275 7,-7.14983628e-14 L11,-7.14983628e-14 C14.3137085,-7.23865412e-14 17,2.6862915 17,6 C17,9.3137085 14.3137085,12 11,12 L10,12 C9.44771525,12 9,11.5522847 9,11 C9,10.4477153 9.44771525,10 10,10 L11,10 C13.209139,10 15,8.209139 15,6 C15,3.790861 13.209139,2 11,2 L7,2 C5.57733169,2.00044446 4.26196171,2.75650064 3.54550439,3.98559552 C2.82904707,5.21469041 2.81933575,6.73183405 3.52,7.97 Z"></path></g></g></g></svg>',
              // className: `custom-class`,
              // maintainCase: true,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 728,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    {
                      'content:encoded': markdown.toHTML(
                        edge.node.rawMarkdownBody
                      ),
                    },
                  ],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {
                    frontmatter: { draft: { ne: true }, templateKey: { eq: "blog-post" } }
                  }
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 130)
                      rawMarkdownBody
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Luke Harris' personal blog feed",
          },
        ],
      },
    },
  ],
}
