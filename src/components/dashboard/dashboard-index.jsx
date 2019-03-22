import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { Typography, Grid } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';
import CardIcon from '@material-ui/icons/CreditCard';
import WorkIcon from '@material-ui/icons/Work';
import GovernmentIcon from '@material-ui/icons/AccountBalance';
import PersonalInfoIcon from "@material-ui/icons/AssignmentInd";
import Toolbar from "../common/toolbar/toolbar-with-navigation";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    gridItem: {
        textAlign: 'center',
        marginTop: 40
    },
    gridButton: {
        borderRadius: 0,
        width: '100%',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class DashboardIndex extends Component {
    navigate = (route) => {
        this.props.history.push(route);
    }
    render() {
        return (
            <>
                <Toolbar buttons={[]} title="Data wallet" />
                <div className={this.props.classes.root}>
                    <Grid container spacing={0}>
                        <Grid item xs={4} sm={3} md={2} className={this.props.classes.gridItem}>
                            <IconButton onClick={this.navigate.bind(this, '/personal')} className={this.props.classes.gridButton}>
                                <PersonalInfoIcon />
                            </IconButton>
                            <Typography variant="caption">Personal info</Typography>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2} className={this.props.classes.gridItem}>
                            <IconButton onClick={this.navigate.bind(this, '')} className={this.props.classes.gridButton}>
                                <GovernmentIcon />
                            </IconButton>
                            <Typography variant="caption">Government info</Typography>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2} className={this.props.classes.gridItem}>
                            <IconButton onClick={this.navigate.bind(this, '')} className={this.props.classes.gridButton}>
                                <CardIcon />
                            </IconButton>
                            <Typography variant="caption">Bank accounts</Typography>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2} className={this.props.classes.gridItem}>
                            <IconButton onClick={this.navigate.bind(this, '')} className={this.props.classes.gridButton}>
                                <WorkIcon />
                            </IconButton>
                            <Typography variant="caption">Work info</Typography>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2} className={this.props.classes.gridItem}>
                            <IconButton onClick={this.navigate.bind(this, '')} className={this.props.classes.gridButton}>
                                <LockIcon />
                            </IconButton>
                            <Typography variant="caption">Passwords</Typography>
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}

DashboardIndex.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DashboardIndex);