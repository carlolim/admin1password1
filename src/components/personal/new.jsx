import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";
import Toolbar from "../common/toolbar/toolbar-with-backbutton";

const styles = theme => ({
});

class New extends Component {
    render () {
        return (
            <>
                <Toolbar buttons={[]} title="New personal information" showBackButton={true} onBack={()=>{this.props.history.goBack()}} />
                
            </>
        )
    }
}

New.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(New);