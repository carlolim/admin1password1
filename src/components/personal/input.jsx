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
                    error={this.props.data.errors.description}
                    value={this.props.data.description}
                    onChange={this.props.change.bind(this, 'description')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="First name"
                    margin="normal"
                    error={this.props.data.errors.firstName}
                    value={this.props.data.firstName}
                    onChange={this.props.change.bind(this, 'firstName')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Middle name"
                    margin="normal"
                    value={this.props.data.middleName}
                    onChange={this.props.change.bind(this, 'middleName')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Last name"
                    margin="normal"
                    value={this.props.data.lastName}
                    onChange={this.props.change.bind(this, 'lastName')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Contact number"
                    margin="normal"
                    value={this.props.data.contact}
                    onChange={this.props.change.bind(this, 'contact')}
                />
                <TextField
                    label="Birthday"
                    type="date"
                    margin="normal"
                    className={this.props.classes.textField}
                    value={this.props.data.birthday}
                    onChange={this.props.change.bind(this, 'birthday')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Nationality"
                    margin="normal"
                    value={this.props.data.nationality}
                    onChange={this.props.change.bind(this, 'nationality')}
                />
                <TextField
                    className={this.props.classes.textField}
                    label="Religion"
                    margin="normal"
                    value={this.props.data.religion}
                    onChange={this.props.change.bind(this, 'religion')}
                />
                <FormControl className={`${this.props.classes.padTop} ${this.props.classes.formControl}`}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup row
                        aria-label="gender">
                        <FormControlLabel
                            control={<Radio color="primary" value={genderEnum.male} checked={Number(this.props.data.gender) === genderEnum.male} onChange={this.props.change.bind(this, 'gender')} />}
                            label="Male"
                            labelPlacement="start"
                            style={{ marginLeft: 0 }}
                        />
                        <FormControlLabel
                            control={<Radio color="primary" value={genderEnum.female} checked={Number(this.props.data.gender) === genderEnum.female} onChange={this.props.change.bind(this, 'gender')} />}
                            label="Female"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </FormControl>
                <FormControl className={this.props.classes.formControl} margin="normal">
                    <InputLabel>Civil status</InputLabel>
                    <Select value={this.props.data.civilStatus} onChange={this.props.change.bind(this, 'civilStatus')}>
                        <MenuItem value={0}><em>None</em></MenuItem>
                        <MenuItem checked={Number(this.props.data.civilStatus) === civilStatusEnum.single} value={civilStatusEnum.single}>Single</MenuItem>
                        <MenuItem checked={Number(this.props.data.civilStatus) === civilStatusEnum.married} value={civilStatusEnum.married}>Married</MenuItem>
                        <MenuItem checked={Number(this.props.data.civilStatus) === civilStatusEnum.widowed} value={civilStatusEnum.widowed}>Widowed</MenuItem>
                        <MenuItem checked={Number(this.props.data.civilStatus) === civilStatusEnum.separated} value={civilStatusEnum.separated}>Separated</MenuItem>
                        <MenuItem checked={Number(this.props.data.civilStatus) === civilStatusEnum.others} value={civilStatusEnum.others}>Others</MenuItem>
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