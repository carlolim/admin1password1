import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import {
    TextField, FormControl, FormLabel,
    Radio, RadioGroup, FormControlLabel,
    Select, MenuItem, InputLabel,
    ExpansionPanel, ExpansionPanelSummary, Typography,
    ExpansionPanelDetails, Avatar
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardIcon from '@material-ui/icons/CreditCard';
import WorkIcon from '@material-ui/icons/Work';
import GovernmentIcon from '@material-ui/icons/AccountBalance';
import Toolbar from "../common/toolbar/toolbar-with-backbutton";
import { genderEnum, civilStatusEnum } from "../../helpers/enums";
import PicPlaceholder from "../../images/user.png";

const styles = theme => ({
    bigAvatar: {
        margin: '0 auto',
        width: 80,
        height: 80,
    },
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
    accordionHeading: {
        paddingLeft: 20,
        paddingTop: 5
    }
});

class New extends Component {
    state = {
        expanded: null
    }

    handleAccordionChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        return (
            <>
                <Toolbar buttons={[]} title="New personal information" showBackButton={true} onBack={() => { this.props.history.goBack() }} />
                <div className={this.props.classes.content}>
                    <Avatar src={PicPlaceholder} className={this.props.classes.bigAvatar} />
                    <TextField
                        className={this.props.classes.textField}
                        label="Title"
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

                    <div className={this.props.classes.padTop}>
                        <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={this.handleAccordionChange('panel1')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <GovernmentIcon color="action" />
                                <Typography variant="button" className={this.props.classes.accordionHeading}>Government info</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={this.state.expanded === 'panel2'} onChange={this.handleAccordionChange('panel2')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <WorkIcon color="action" />
                                <Typography variant="button" className={this.props.classes.accordionHeading}>Work info</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={this.state.expanded === 'panel3'} onChange={this.handleAccordionChange('panel3')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <CardIcon color="action" />
                                <Typography variant="button" className={this.props.classes.accordionHeading}>Bank accounts</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </div>
            </>
        )
    }
}

New.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(New);