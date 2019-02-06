import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const styles = theme => ({
  paper : {
    marginBottom: 0,
    backgroundColor: 'transparent',
    [theme.breakpoints.up('lg')]: {
      margin: 300,
      marginBottom: 0,
    },
  },
  text : {
    color: '#FFF',
    [theme.breakpoints.down('xs')]:{
      display: 'none',
    }
  },
})

class Contact extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.paper}>
        <Typography variant="h4"  className={classes.text}>Contact Me</Typography>
        <a href='https://github.com/JohnWinter13' target="_blank" rel="noopener noreferrer">   
            <IconButton aria-label="View Github" style={{color: '#FFF'}}>     
              <FaGithub/>
            </IconButton>
        </a>
        <a href='https://www.linkedin.com/in/youssef-rizkalla' target="_blank" rel="noopener noreferrer">   
            <IconButton aria-label="View Linkedin" style={{color: '#FFF'}}>
              <FaLinkedin/>
            </IconButton>
        </a>
        <a href='mailto:rizkally@mcmaster.ca' target="_blank" rel="noopener noreferrer">        
            <IconButton aria-label="Email Me" style={{color: '#FFF'}}>
              <FaEnvelope/>
            </IconButton>
        </a>
      </Paper>
    )
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Contact)
