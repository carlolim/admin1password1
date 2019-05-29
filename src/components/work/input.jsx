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
                    label="Description"
                    margin="normal"
                    error={this.props.data.errors.description}
                    value={this.props.data.description}
                    onChange={this.props.change.bind(this, 'description')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Job Title"
                    margin="normal"
                    value={this.props.data.jobTitle}
                    onChange={this.props.change.bind(this, 'jobTitle')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Employment Status"
                    margin="normal"
                    value={this.props.data.employmentStatus}
                    onChange={this.props.change.bind(this, 'employmentStatus')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="From"
                    margin="normal"
                    type="month"
                    value={this.props.data.dateFrom}
                    onChange={this.props.change.bind(this, 'dateFrom')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="To"
                    margin="normal"
                    type="month"
                    value={this.props.data.dateTo}
                    onChange={this.props.change.bind(this, 'dateTo')}
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.props.data.isPresent}
                            value={!this.props.data.isPresent}
                            color="primary"
                            onChange={this.props.change.bind(this, 'isPresent')}
                        />
                    }
                    label="Present"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Company/Employer/Business name"
                    margin="normal"
                    value={this.props.data.company}
                    onChange={this.props.change.bind(this, 'company')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Company/Employer/Business address"
                    margin="normal"
                    value={this.props.data.companyAdress}
                    onChange={this.props.change.bind(this, 'companyAdress')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Company/Employer/Business contact number"
                    margin="normal"
                    value={this.props.data.companyContact}
                    onChange={this.props.change.bind(this, 'companyContact')}
                />
            </>
        )
    }
}

WorkInput.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(WorkInput);