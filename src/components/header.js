import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { MdLaptop, MdHome, MdBookmark, MdAssignment, MdCloudDownload, MdMenu } from 'react-icons/md'

import 'typeface-bad-script';
import 'typeface-roboto';

import resume from "../data/resume.pdf"


const theme = createMuiTheme({
  palette: {
    primary: { main: '#1e88e5' },
  },
});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 40,
    },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  fullList: {
    width: 'auto',
  },
  mainlink : {
    color : 'white',
    textDecoration: 'none',
  },
  link : {
    color : 'white',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  linkb : {
    color : '#1e88e5',
    textDecoration: 'none',
  },
};

class ButtonAppBar extends React.Component {
  state = {
    top: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render()
  {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
        <Link to="/" className={classes.linkb}>
          <ListItem button>
            <ListItemIcon><MdHome size={24}/></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to="/projects" className={classes.linkb}>
          <ListItem button>
            <ListItemIcon><MdLaptop size={24}/></ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </ListItem>
        </Link>
        <Link to="/blog" className={classes.linkb}>
          <ListItem button>
            <ListItemIcon><MdBookmark size={24}/></ListItemIcon>
            <ListItemText>Blog</ListItemText>
          </ListItem>
        </Link>
        <a href={resume} target="_blank" rel="noopener noreferrer" className={classes.linkb}> 
          <ListItem button>
            <ListItemIcon><MdAssignment size={24}/></ListItemIcon>
            <ListItemText>Resume</ListItemText>
          </ListItem>
        </a>
      </div>
    );
  
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('top', true)}>
                <MdMenu size={24} />
              </IconButton>
              <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('top', false)}
                  onKeyDown={this.toggleDrawer('top', false)}
                >
                  {fullList}
                </div>
              </Drawer>
              <Typography className={classes.grow} variant="h6" color="inherit" style = {{fontFamily:'Bad Script'}}>        
                <Link to="/" className={classes.mainlink}>Youssef Rizkalla</Link>
              </Typography>
              <Link to="/projects" className={classes.link}>
                <Button color="inherit">Projects</Button>
              </Link>
              <Link to="/blog" className={classes.link}>
                <Button color="inherit">Blog</Button>
              </Link>
              <a href={resume} target="_blank" rel="noopener noreferrer" className={classes.link}> 
                <Button color="inherit">Resume<MdCloudDownload size={24} style={{marginLeft: 10}}/></Button>
              </a>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    )
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
