import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Typography, Fab, Dialog, AppBar,
    Toolbar, IconButton, Divider,
    List, ListItem, ListItemText, Slide, ListItemIcon
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import LockIcon from '@material-ui/icons/Lock';
import CardIcon from '@material-ui/icons/CreditCard';
import WorkIcon from '@material-ui/icons/Work';
import GovernmentIcon from '@material-ui/icons/AccountBalance';
import PersonalInfoIcon from "@material-ui/icons/AssignmentInd";

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: 15,
        right: 15,
        zIndex: 2
    },
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    navLink: {
        textDecoration: 'none'
    }
});

class NewRecord extends Component {
    state = {
        showDialog: false
    }

    transition(props) {
        return <Slide direction="up" {...props} />;
    }

    render() {
        return (
            <>
                <Dialog
                    fullScreen
                    open={this.state.showDialog}
                    onClose={() => { this.setState({ showDialog: false }) }}
                    TransitionComponent={this.transition}>
                    <AppBar className={this.props.classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={() => { this.setState({ showDialog: false }) }} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={this.props.classes.flex}>New record</Typography>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <Link to='/personal/new' className={this.props.classes.navLink}>
                            <ListItem>
                                <ListItemIcon>
                                    <PersonalInfoIcon />
                                </ListItemIcon>
                                <ListItemText primary="Personal info" />
                            </ListItem>
                        </Link>
                        <Divider light />
                        <Link to='/government/new' className={this.props.classes.navLink}>
                            <ListItem>
                                <ListItemIcon>
                                    <GovernmentIcon />
                                </ListItemIcon>
                                <ListItemText primary="Government info" />
                            </ListItem>
                        </Link>
                        <Divider light />
                        <Link to='/work/new' className={this.props.classes.navLink}>
                            <ListItem>
                                <ListItemIcon>
                                    <WorkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Work info" />
                            </ListItem>
                        </Link>
                        <Divider light />
                        <Link to='/bankaccounts/new' className={this.props.classes.navLink}>
                            <ListItem>
                                <ListItemIcon>
                                    <CardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Bank accounts" />
                            </ListItem>
                        </Link>
                        <Divider light />
                        <Link to='/passwords/new' className={this.props.classes.navLink}>
                            <ListItem>
                                <ListItemIcon>
                                    <LockIcon />
                                </ListItemIcon>
                                <ListItemText primary="Passwords" />
                            </ListItem>
                        </Link>
                    </List>
                </Dialog>



                <Fab onClick={() => { this.setState({ showDialog: true }) }} color="primary" className={this.props.classes.fab}><AddIcon /></Fab>
            </>
        )
    }
}

NewRecord.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NewRecord);