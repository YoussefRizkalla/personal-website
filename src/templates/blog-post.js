import React from 'react'
import Link from 'gatsby-link'
import {graphql} from 'gatsby'

import Layout from '../components/layout'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

import 'typeface-roboto'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Link to="/blog" style={{textDecoration:'none'}}><Typography variant='h4'>Blog</Typography></Link>
      <br />
      <Paper style={{padding: 25}}>
        <h1>{post.frontmatter.title}</h1>
        <Typography variant='subtitle2'>
              {post.frontmatter.date} {' • '} {post.frontmatter.time} Read
        </Typography>
        <br/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Paper>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "DD.MM.YYYY")
        time
      }
    }
  }
`
