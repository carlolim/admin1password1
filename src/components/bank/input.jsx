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

class BankInput extends Component {
    render() {
        return (
            <>
                <TextField
                    className={this.props.classes.textField}
                    label="Bank name"
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Type of Account"
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Account number"
                    margin="normal"
                />
            </>
        )
    }
}

BankInput.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BankInput);