import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import {
    ExpansionPanel, ExpansionPanelSummary, Typography,
    ExpansionPanelDetails, Avatar, Button
} from "@material-ui/core";
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
        showRemovePicture: false
    }

    handleAccordionChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    handlePictureSelect = (event) => {
        if (event.target.files.length > 0) {
            this.setState({ picture: URL.createObjectURL(event.target.files[0]), showRemovePicture: true })
        }
    }

    handleRemovePicture = () => {
        this.setState({picture: PicPlaceholder, showRemovePicture: false});
    }

    render() {
        return (
            <>
                <Toolbar buttons={[]} title="New personal information" showBackButton={true} onBack={() => { this.props.history.goBack() }} />
                <div className={this.props.classes.content}>

                    <input onChange={this.handlePictureSelect.bind(this)} type="file" id="inputImage" style={{ display: 'none' }} />

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

                    <PersonalInfoInput />

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