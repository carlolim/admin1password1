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
                    label="SSS No."
                    margin="normal"
                    value={this.props.data.sss}
                    onChange={this.props.change.bind(this, 'sss')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="TIN No."
                    margin="normal"
                    value={this.props.data.tin}
                    onChange={this.props.change.bind(this, 'tin')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="PhilHealth No."
                    margin="normal"
                    value={this.props.data.philHealth}
                    onChange={this.props.change.bind(this, 'philHealth')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Pagibig/HDMF No."
                    margin="normal"
                    value={this.props.data.pagibig}
                    onChange={this.props.change.bind(this, 'pagibig')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="PRC License No."
                    margin="normal"
                    value={this.props.data.prc}
                    onChange={this.props.change.bind(this, 'prc')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Passport No."
                    margin="normal"
                    value={this.props.data.passport}
                    onChange={this.props.change.bind(this, 'passport')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Tax Status"
                    margin="normal"
                    value={this.props.data.taxStatus}
                    onChange={this.props.change.bind(this, 'taxStatus')}
                />
            </>
        )
    }
}

GovernmentInput.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GovernmentInput);