import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { insert } from "../../data-access/generic";
import {
    ExpansionPanel, ExpansionPanelSummary, Typography,
    ExpansionPanelDetails, Avatar, Button, IconButton
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardIcon from '@material-ui/icons/CreditCard';
import WorkIcon from '@material-ui/icons/Work';
import GovernmentIcon from '@material-ui/icons/AccountBalance';
import Toolbar from "../common/toolbar/toolbar-with-backbutton";
import PicPlaceholder from "../../images/user.png";
import PersonalInfoInput from "./input";
import GovernmentInput from "../government/input";
import WorkInput from "../work/input";
import BankInput from "../bank/input";
import { hasValue } from "../../helpers/functions";

const styles = theme => ({
    bigAvatar: {
        margin: '0 auto',
        width: 100,
        height: 100,
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
        expanded: null,
        picture: PicPlaceholder,
        pictureBlob: null,
        showRemovePicture: false,
        personal: {
            description: '', firstName: '', lastName: '', middleName: '', contact: '', birthday: '', picture: '', nationality: '', gender: 0, religion: '', civilStatus: 0,
            errors: { description: false, firstName: false }
        }
    }

    handleAccordionChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    handlePictureSelect = (event) => {
        if (event.target.files.length > 0) {
            if ((/image\/(gif|jpe?g|tiff|png)$/i).test(event.target.files[0].type)) {
                var file = event.target.files[0];
                const pic =  URL.createObjectURL(event.target.files[0]);
                const reader = new FileReader();
                reader.onload = e => {
                    this.setState({ pictureBlob: file, picture: pic, showRemovePicture: true });
                };
                reader.readAsText(event.target.files[0]);
            }
        }
    }

    handleRemovePicture = () => this.setState({ picture: PicPlaceholder, showRemovePicture: false });

    handleChangePersonalInfo = (property, e) => this.setState({ ...this.state, personal: { ...this.state.personal, [property]: e.target.value } });

    handleSave = async () => {
        var data = this.state.personal;
        var errors = { hasError: false, description: false, firstName: false };
        delete data.errors;

        if (!hasValue(data.description)) {
            errors.hasError = true;
            errors.description = true;
        }
        if (!hasValue(data.firstName)) {
            errors.firstName = true;
            errors.hasError = true;
        }

        if (errors.hasError) {
            delete errors.hasError;
            this.setState({ ...this.state, personal: { ...this.state.personal, errors } });
        }
        else {
            data.birthday = hasValue(data.birthday) ? new Date(data.birthday) : null;
            data.civilStatus = hasValue(data.civilStatus) ? Number(data.civilStatus) : 0;
            data.gender = hasValue(data.gender) ? Number(data.gender) : 0;
            data.picture = this.state.pictureBlob;
            var result = await insert("personal", data);
            if (result) this.props.history.push('/personal');
        }
    }

    render() {
        return (
            <>
                <Toolbar buttons={[
                    <IconButton color="inherit" onClick={this.handleSave}>
                        <DoneIcon />
                    </IconButton>
                ]} title="New personal info" showBackButton={true} onBack={() => { this.props.history.goBack() }} />
                <div className={this.props.classes.content}>

                    <input capture onChange={this.handlePictureSelect.bind(this)} type="file" accept="image/*" id="inputImage" style={{ display: 'none' }} />

                    <label htmlFor="inputImage">
                        <Avatar
                            src={this.state.picture}
                            className={this.props.classes.bigAvatar}
                        />
                    </label>
                    {this.state.showRemovePicture ?
                        <div className={`text-center ${this.props.classes.padTop}`}>
                            <Button onClick={this.handleRemovePicture} size="small" variant="contained" color="secondary">remove picture</Button>
                        </div>
                        : null}

                    <PersonalInfoInput data={this.state.personal} change={this.handleChangePersonalInfo} />

                    <div className={this.props.classes.padTop}>
                        <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={this.handleAccordionChange('panel1')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <GovernmentIcon color="action" />
                                <Typography variant="button" className={this.props.classes.accordionHeading}>Government info</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="display-block">
                                <GovernmentInput />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={this.state.expanded === 'panel2'} onChange={this.handleAccordionChange('panel2')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <WorkIcon color="action" />
                                <Typography variant="button" className={this.props.classes.accordionHeading}>Work info</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="display-block">
                                <WorkInput />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={this.state.expanded === 'panel3'} onChange={this.handleAccordionChange('panel3')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <CardIcon color="action" />
                                <Typography variant="button" className={this.props.classes.accordionHeading}>Bank accounts</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="display-block">
                                <BankInput />
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