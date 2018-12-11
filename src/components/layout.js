import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query siteMetaDataQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta name="keywords" content={data.site.siteMetadata.keywords} />
          <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
          <meta name="google-site-verification" content="wWsQQEeOdjVzvcw9gxebtP62w_NocddROZ8R19ch8as" />
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1150,
            padding: '80px 1.0875rem 1.45rem',        
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
