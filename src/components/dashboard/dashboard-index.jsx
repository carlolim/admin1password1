import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";
import ToolbarWithNavigation from "../common/toolbar/toolbar-with-navigation";

const styles = {
    
}

class DashboardIndex extends Component {
    render () {
        return (
            <>
                <ToolbarWithNavigation buttons={[]} title="Dashboard" />
                <Typography>dashboard index</Typography>
            </>
        )
    }
}

DashboardIndex.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DashboardIndex);