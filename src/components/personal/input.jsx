import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import {
    TextField, FormControl, FormLabel,
    Radio, RadioGroup, FormControlLabel,
    Select, MenuItem, InputLabel
} from "@material-ui/core";
import { genderEnum, civilStatusEnum } from "../../helpers/enums";

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

class PersonalInfoInput extends Component {
    render() {
        return (
            <>
                <TextField
                    className={this.props.classes.textField}
                    label="Description"
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="First name"
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Middle name"
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Last name"
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Contact number"
                    margin="normal"
                />
                <TextField
                    label="Birthday"
                    type="date"
                    margin="normal"
                    className={this.props.classes.textField}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Nationality"
                    margin="normal"
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Religion"
                    margin="normal"
                />
                <FormControl className={`${this.props.classes.padTop} ${this.props.classes.formControl}`}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup row
                        aria-label="gender">
                        <FormControlLabel
                            value={genderEnum.female.toString()}
                            control={<Radio color="primary" />}
                            label="Female"
                            labelPlacement="start"
                            style={{ marginLeft: 0 }}
                        />
                        <FormControlLabel
                            value={genderEnum.male.toString()}
                            control={<Radio color="primary" />}
                            label="Male"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </FormControl>
                <FormControl className={this.props.classes.formControl} margin="normal">
                    <InputLabel>Civil status</InputLabel>
                    <Select value={0}>
                        <MenuItem value={0}><em>None</em></MenuItem>
                        <MenuItem value={civilStatusEnum.single}>Single</MenuItem>
                        <MenuItem value={civilStatusEnum.married}>Married</MenuItem>
                        <MenuItem value={civilStatusEnum.widowed}>Widowed</MenuItem>
                        <MenuItem value={civilStatusEnum.separated}>Separated</MenuItem>
                        <MenuItem value={civilStatusEnum.others}>Others</MenuItem>
                    </Select>
                </FormControl>
            </>
        )
    }
}

PersonalInfoInput.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PersonalInfoInput);