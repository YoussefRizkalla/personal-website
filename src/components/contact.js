import React from 'react'
import styled from 'styled-components'

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

const Text = styled.h2`
  color: white;
  margin-bottom: 0;
  font-family: 'Bad Script'
`

const Paper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  margin: 25% ;
  margin-bottom: 20%;
`

class Contact extends React.Component {
  render() {
    return (
      <Paper>
        <Text>Contact Me</Text>
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

export default Contact
