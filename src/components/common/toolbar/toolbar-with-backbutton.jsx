import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

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

class ToolbarWithBackButton extends Component {
  render(){
    return (
      <div className={this.props.classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            {this.props.showBackButton ? 
              <IconButton onClick={this.props.onBack} className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
                <ArrowBack />
              </IconButton>
            : null}
            <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
              {this.props.title}
            </Typography>
            {this.props.buttons.map((item, index) => <span key={index}>{item}</span>)}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ToolbarWithBackButton.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ToolbarWithBackButton);