import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { Typography, Grid, Paper } from "@material-ui/core";
import ToolbarWithSearch from "../common/toolbar/toolbar-with-search";

const styles = {

}

class DashboardIndex extends Component {
    render() {
        return (
            <>
                <ToolbarWithSearch buttons={[]} title="Digital ID ng Pinas" />
                <Grid container spacing={8}>
                    {[0, 1, 2].map(value => (
                        <Grid xs key={value} item>
                            <Typography>asdasdasd</Typography>
                        </Grid>
                    ))}
                </Grid>
            </>
        )
    }
}

DashboardIndex.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DashboardIndex);