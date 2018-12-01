import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import ProjectCards from '../components/project-cards'

const ProjectPage = ({data}) => {
  const { edges: projectImgData } = data.ProjectImages;
  return (
    <Layout>
      <h2>Projects</h2>
      <p>These are some projects that I&#39;ve worked on over the years.</p>
      <ProjectCards projectImgs={projectImgData} />    
    </Layout>
  )
}

export const imgsQuery = graphql`
  query allImgsQuery {
    ProjectImages: allFile {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 800, maxHeight:450) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
export default ProjectPage
