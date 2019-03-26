import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { TextField } from "@material-ui/core";

const styles = theme => ({
    content: {
        padding: 20
    },
    textField: {
        width: '100%',
    },
    formControl: {
        display: 'block',
        width: '100%'
    },
    padTop: {
        marginTop: 20
    },
});

class GovernmentInput extends Component {
    render () {
        return (
            <>
                <TextField
                    className={this.props.classes.textField}
                    label="SSS No."
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="TIN No."
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="PhilHealth No."
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Pagibig/HDMF No."
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="PRC License No."
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Passport No."
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Tax Status"
                    margin="normal"
                />
            </>
        )
    }
}

GovernmentInput.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GovernmentInput);