import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Links from "../navigation/links";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const styles = {
  root: {
    flexGrow: 1,
    paddingTop: 56
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ToolbarWithNavigation extends Component {
  state = {
    isOpen: false
  };

  toggleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render(){
    return (
      <div className={this.props.classes.root}>
        <SwipeableDrawer
          open={this.state.isOpen}
          onClose={this.toggleDrawer}
          onOpen={this.toggleDrawer}
          disableBackdropTransition={true}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}>
                  <Links />
              </div>
        </SwipeableDrawer>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer} className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
                {this.props.title}
            </Typography>
            {this.props.buttons.map((item, index) => <span color="inherit" key={index}>{item}</span>)}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ToolbarWithNavigation.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ToolbarWithNavigation);