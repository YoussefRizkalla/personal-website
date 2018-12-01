import React from 'react'
import Link from 'gatsby-link'
import {graphql} from 'gatsby'

import Layout from '../components/layout'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

import 'typeface-roboto'

const BlogPage = ({ data }) => (
  <Layout>
    <Link to="/blog" style={{textDecoration:'none'}}><Typography variant='h4'>Blog</Typography></Link>
    <br/>
    <Typography variant='p'>These are some blog posts that I write every once in a while.</Typography>
    <br/>
    <Typography variant='p'>You&#39;ll find me writing about programming, technology, and random stuff.</Typography>
    <br/>
    <Paper style={{padding: 25}}> 
      <h3 style={{textAlign:'center'}}>Latest Posts</h3>
      {data.allMarkdownRemark.edges.map(post => (
        <Paper style={{padding: 25, marginBottom: 25}}>
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <Typography variant='subtitle2'>
              {post.node.frontmatter.date} {' • '} {post.node.frontmatter.time} Read
            </Typography>
            <br />
            <p>{post.node.excerpt}</p>
            <Link to={post.node.frontmatter.path} style={{color:'#000', textDecorationColor:'#a31faa'}}>Continue reading...</Link>
          </div>
        </Paper>
      ))}
    </Paper>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) { 
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD.MM.YYYY")
            time
          }
          excerpt(pruneLength: 400)
        }
      }
    }
  }
`

export default BlogPage
