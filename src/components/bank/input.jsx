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
                    label="Description"
                    margin="normal"
                    error={this.props.data.errors.description}
                    value={this.props.data.description}
                    onChange={this.props.change.bind(this, 'description')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Bank name"
                    margin="normal"
                    value={this.props.data.bankName}
                    onChange={this.props.change.bind(this, 'bankName')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Type of Account"
                    margin="normal"
                    value={this.props.data.accountType}
                    onChange={this.props.change.bind(this, 'accountType')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Account number"
                    margin="normal"
                    value={this.props.data.accountNumber}
                    onChange={this.props.change.bind(this, 'accountNumber')}
                />
            </>
        )
    }
}

BankInput.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BankInput);