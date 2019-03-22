import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { AppBar, Toolbar, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    myClass: {
        font: 20,
        textAlign: 'center',
        width: '100%'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

class SearchBar extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <div className={this.props.classes.grow} />
                    <div className={this.props.classes.search}>
                        <div className={this.props.classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: this.props.classes.inputRoot,
                                input: this.props.classes.inputInput,
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SearchBar);