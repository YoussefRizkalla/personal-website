import React from 'react'
import PropTypes from 'prop-types'
import Img  from 'gatsby-image'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faCode } from '@fortawesome/free-solid-svg-icons'

import projectList from "../data/projects.json"

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  chip: {
    marginLeft: 15,
    marginBottom: 5,
  },
})

class ProjectCard extends React.Component {

  render() {
    const { classes } = this.props
    const projectImgs = this.props.projectImgs
    return (
      <div className="project-list">
        <Grid container style={{flexGrow: 1}} spacing={16}>
          {projectList.map(project => {
            const imgData = projectImgs.find(img => {
              return img.node.relativePath === project.img
            })
            const image = imgData.node.childImageSharp.sizes
            return (
              <Grid item xs={12} md={4} sm={6}>
                <Card className={classes.card}>
                  <CardHeader
                    title= {project.name}
                    subheader= {project.date}
                  />
                <Img sizes={image}/>
                  <CardContent>
                    <Typography component="p">
                      {project.description}
                    </Typography>
                  </CardContent>
                  {project.technologies.map(tech => {
                    return (
                      <Chip
                        label={tech}
                        className={classes.chip}
                      />
                    )
                  })}
                  <CardActions className={classes.actions} disableActionSpacing>
                    {project.src &&
                      <a href={project.src} target="_blank" rel="noopener noreferrer">
                        <IconButton aria-label="View Source">
                          <FontAwesomeIcon icon={faCode} />
                        </IconButton>
                      </a> 
                    }
                    {project.url &&
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <IconButton aria-label="View Website">
                          <FontAwesomeIcon icon={faGlobeAmericas} />
                        </IconButton>
                      </a> 
                    }
                  </CardActions>
                </Card>
              </Grid>     
            )
          })}
        </Grid>
      </div>  
    )
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProjectCard)
