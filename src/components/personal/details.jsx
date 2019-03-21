import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { Avatar, Typography, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Toolbar from "../common/toolbar/toolbar-with-navigation";
import PicPlaceholder from "../../images/user.png";

const styles = theme => ({
    bigAvatar: {
        margin: '0 auto',
        width: 80,
        height: 80,
    },
});

class PersonalInfo extends Component {
    render() {
        return (
            <>
                <Toolbar buttons={[
                    <IconButton color="inherit"><EditIcon /></IconButton>
                ]} title="Personal info" />
                <div className="content">
                    <Avatar alt="Remy Sharp" src={PicPlaceholder} className={this.props.classes.bigAvatar} />
                    <Typography variant="h6" align="center">Carlo Lim</Typography>
                </div>
            </>
        )
    }
}

PersonalInfo.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PersonalInfo);