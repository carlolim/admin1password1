import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

const styles = {
    myClass: {
        font: 20,
        textAlign: 'center',
        width: '100%'
    }
}

class Template extends Component {
    render () {
        return (
            <>
                <Typography className={this.props.classes.myClass}>Hello world!</Typography>
            </>
        )
    }
}

Template.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Template);