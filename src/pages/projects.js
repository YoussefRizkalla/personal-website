import React from 'react'

import Grid from '@material-ui/core/Grid';

import Layout from '../components/layout'
import ProjectCard from '../components/project-card'

const ProjectPage = () => (
  <Layout>
    <h2>Projects</h2>
    <p>These are some projects that I've worked on over the years.</p>
    <Grid container style={{flexGrow: 1}} spacing={16}>
      <Grid item xs={12} sm={4}>
        <ProjectCard/>
      </Grid>     
      <Grid item xs={12} sm={4}>
        <ProjectCard/>
      </Grid>  
      <Grid item xs={12} sm={4}>
        <ProjectCard/>
      </Grid>     
      <Grid item xs={12} sm={4}>
        <ProjectCard/>
      </Grid>  
      <Grid item xs={12} sm={4}>
        <ProjectCard/>
      </Grid>     
      <Grid item xs={12} sm={4}>
        <ProjectCard/>
      </Grid>  
    </Grid>
  </Layout>
)

export default ProjectPage
