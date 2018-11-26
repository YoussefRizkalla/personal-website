import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Image from './image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faCode } from '@fortawesome/free-solid-svg-icons'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
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
});

class ProjectCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="The Perpetuator"
          subheader="Oct 2017 - Dec 2017"
        />
        <Image></Image>
        <CardContent>
          <Typography component="p">
            A 3D / 2D perspective shift game built with Unreal Engine 4. 
            Placed 1st for best 3D game at Dufferin Peel's annual game design competition
            hosted at the University of Toronto Mississauga.
          </Typography>
        </CardContent>
        <Chip
          label="Unreal Engine 4"
          className={classes.chip}
          />
        <Chip
          label="C++"
          className={classes.chip}
          />
        <Chip
          label="Unreal Blueprints"
          className={classes.chip}
          />
        <CardActions className={classes.actions} disableActionSpacing>
          <a href="https://github.com/JohnWinter13/Ninja" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="View Source">
              <FontAwesomeIcon icon={faCode} />
            </IconButton>
          </a> 
          <IconButton aria-label="View Website">
            <FontAwesomeIcon icon={faGlobeAmericas} />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Cillum sunt anim exercitation labore culpa fugiat culpa consequat officia non non non.
            </Typography>
            <Typography paragraph>
              Exercitation officia exercitation nostrud dolor pariatur et est in proident deserunt. 
              In veniam do quis labore eiusmod ea dolore nostrud do quis fugiat nulla amet. 
              Est magna duis irure amet proident.
            </Typography>
            <Typography paragraph>
              Nisi sit qui incididunt dolore. Pariatur enim officia qui exercitation cillum anim ut non esse do eiusmod. 
              Pariatur amet ullamco adipisicing aliqua consequat amet dolore esse Lorem labore. 
              Non Lorem labore quis ut esse reprehenderit duis sint ullamco cupidatat labore. Consequat proident fugiat dolore consequat dolore. 
              Proident anim tempor enim nisi laborum commodo occaecat nulla nulla mollit id Lorem nulla et. 
              Fugiat commodo aliquip nisi duis sunt aliqua veniam est veniam reprehenderit id exercitation ipsum mollit.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);