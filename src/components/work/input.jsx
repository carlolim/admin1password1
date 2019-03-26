import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { TextField, FormControlLabel, Switch } from "@material-ui/core";

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

class WorkInput extends Component {
    render() {
        return (
            <>
                <TextField
                    className={this.props.classes.textField}
                    label="Job Title"
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Employment Status"
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="From"
                    margin="normal"
                    type="month"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="To"
                    margin="normal"
                    type="month"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={false}
                            onChange={() => {}}
                            value={true}
                            color="primary"
                        />
                    }
                    label="Present"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Employer/Business name"
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Employer/Business address"
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Employer/Business contact number"
                    margin="normal"
                />
            </>
        )
    }
}

WorkInput.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(WorkInput);