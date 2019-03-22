import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from "@material-ui/icons/Home";
import LockIcon from '@material-ui/icons/Lock';
import CardIcon from '@material-ui/icons/CreditCard';
import WorkIcon from '@material-ui/icons/Work';
import GovernmentIcon from '@material-ui/icons/AccountBalance';
import PersonalInfoIcon from "@material-ui/icons/AssignmentInd";

const styles = {
  drawer: {
    width: 250
  },
  navLink: {
    textDecoration: 'none'
  }
}

class Links extends Component {
  render() {
    return (
      <div className={this.props.classes.drawer}>
        <List>
          <Link to='/' className={this.props.classes.navLink}>
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to='/personal' className={this.props.classes.navLink}>
            <ListItem>
              <ListItemIcon>
                <PersonalInfoIcon />
              </ListItemIcon>
              <ListItemText primary="Personal info" />
            </ListItem>
          </Link>
          <Link to='/government' className={this.props.classes.navLink}>
            <ListItem>
              <ListItemIcon>
                <GovernmentIcon />
              </ListItemIcon>
              <ListItemText primary="Government info" />
            </ListItem>
          </Link>
          <Link to='/work' className={this.props.classes.navLink}>
            <ListItem>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Work info" />
            </ListItem>
          </Link>
          <Link to='/bankaccounts' className={this.props.classes.navLink}>
            <ListItem>
              <ListItemIcon>
                <CardIcon />
              </ListItemIcon>
              <ListItemText primary="Bank accounts" />
            </ListItem>
          </Link>
          <Link to='/passwords' className={this.props.classes.navLink}>
            <ListItem>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText primary="Passwords" />
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}

Links.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Links);