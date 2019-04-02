import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import moment from "moment";
import {
    Avatar, Typography, IconButton,
    List, ListItem, ListItemText, Divider, Paper
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Toolbar from "../common/toolbar/toolbar-with-navigation";
import PicPlaceholder from "../../images/user.png";
import SearchBar from "../common/toolbar/searchbar";
import NewRecord from "../common/new-record";
import { selectById } from "../../data-access/generic";
import { formatDate, hasValue, computeAge, getGender, getCivilStatus } from "../../helpers/functions";
import { genderEnum, civilStatusEnum } from "../../helpers/enums";

const styles = theme => ({
    bigAvatar: {
        margin: '0 auto',
        width: 80,
        height: 80,
    },
    paper: {
        margin: 15,
        paddingTop: 15
    }
});

class PersonalInfo extends Component {
    state = {
        personal: {
            picture: '', description: '', firstName: '', lastName: '', middleName: '', contact: '', birthday: '', picture: '', nationality: '', gender: 0, religion: '', civilStatus: 0
        }
    }

    componentDidMount = async () => {
        var personal = await selectById("personal", Number(this.props.match.params.id));
        if (hasValue(personal)) {
            this.setState({ ...this.state, personal });
        }
    }

    handleDisplayPicture = () => {
        let picture = this.state.personal.picture;
        if (picture instanceof File) {
            return URL.createObjectURL(picture);
        }
    };

    render() {
        return (
            <>
                <Toolbar buttons={[
                    <IconButton color="inherit"><EditIcon /></IconButton>
                ]} title="My Details" />
                <SearchBar />

                <div className="content">
                    <Avatar src={this.handleDisplayPicture()} className={this.props.classes.bigAvatar} />
                    <Typography variant="h6" align="center">{this.state.firstName} {this.state.lastName}</Typography>

                    <Paper className={this.props.classes.paper} elevation={1}>
                        <List component="nav">
                            <ListItem button>
                                <ListItemText primary={labelFragment('First name')} secondary={dataFragment(this.state.personal.firstName)} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Middle name')} secondary={dataFragment(this.state.personal.middleName)} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Last name')} secondary={dataFragment(this.state.personal.lastName)} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Birthday')} secondary={dataFragment(formatDate(this.state.personal.birthday))} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Age')} secondary={dataFragment(computeAge(this.state.personal.birthday))} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Gender')} secondary={dataFragment(getGender(this.state.personal.gender))} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Civil status')} secondary={dataFragment(getCivilStatus(this.state.personal.civilStatus))} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Nationality')} secondary={dataFragment(this.state.personal.nationality)} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Religion')} secondary={dataFragment(this.state.personal.religion)} />
                            </ListItem>
                        </List>
                    </Paper>

                    <Paper className={this.props.classes.paper} elevation={1}>
                        <Typography variant="h6" align="center">Address</Typography>
                        <List component="nav">
                            <ListItem button>
                                <ListItemText primary={labelFragment('Room./Floor./Unit no. & Building name')} secondary={dataFragment('')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('House/Lot & Block no.')} secondary={dataFragment('Lot 27 Block 1')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Street')} secondary={dataFragment('Oak street')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Subdivision')} secondary={dataFragment('2 Verde Rosa')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Barangay/District/Locality')} secondary={dataFragment('United Bayanihan')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('City/Municipality')} secondary={dataFragment('San Pedro')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Province')} secondary={dataFragment('Laguna')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Country')} secondary={dataFragment('Philippines')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Zip code')} secondary={dataFragment('1234')} />
                            </ListItem>
                        </List>
                    </Paper>

                    <Paper className={this.props.classes.paper} elevation={1}>
                        <Typography variant="h6" align="center">Contact Details</Typography>
                        <List component="nav">
                            <ListItem button>
                                <ListItemText primary={labelFragment('Mobile')} secondary={dataFragment('09668274645')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Landline')} secondary={dataFragment('(02)-275-8120')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Email')} secondary={dataFragment('carlojameslim1@gmail.com')} />
                            </ListItem>
                        </List>
                    </Paper>

                    <Paper className={this.props.classes.paper} elevation={1}>
                        <Typography variant="h6" align="center">Government Details</Typography>
                        <List component="nav">
                            <ListItem button>
                                <ListItemText primary={labelFragment('SSS No.')} secondary={dataFragment('3444002483')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('TIN')} secondary={dataFragment('457751996000')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('PhilHealth No')} secondary={dataFragment('102000118983')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Pagibig/HDMF No.')} secondary={dataFragment('121113889418')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('PRC License No.')} secondary={dataFragment('')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Passport No.')} secondary={dataFragment('')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Tax Status')} secondary={dataFragment('S')} />
                            </ListItem>
                        </List>
                    </Paper>

                    <Paper className={this.props.classes.paper} elevation={1}>
                        <Typography variant="h6" align="center">Work Information</Typography>
                        <List component="nav">
                            <ListItem button>
                                <ListItemText primary={labelFragment('Job Title')} secondary={dataFragment('Lead Software Engineer')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Employment Status')} secondary={dataFragment('Regular')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Hire date')} secondary={dataFragment('April 27, 2015')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Years/Month in service')} secondary={dataFragment('3 years 11 months')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Employer/Business name')} secondary={dataFragment('Sprout Solutions Philippines Inc.')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Employer/Business address')} secondary={dataFragment('11th floor Cyber Sigma, Mckinley west Lawton Ave. Taguig City')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Employer/Business Contact no.')} secondary={dataFragment('')} />
                            </ListItem>
                        </List>
                    </Paper>

                    <Paper className={this.props.classes.paper} elevation={1}>
                        <Typography variant="h6" align="center">Bank Details</Typography>
                        <List component="nav">
                            <ListItem button>
                                <ListItemText primary={labelFragment('Bank name')} secondary={dataFragment('BDO')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Type of Account')} secondary={dataFragment('Savings')} />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary={labelFragment('Account number')} secondary={dataFragment('00123456789')} />
                            </ListItem>
                        </List>
                    </Paper>
                </div>
                <NewRecord />
            </>
        )
    }
}

const labelFragment = (text) => (
    <React.Fragment>
        <Typography variant="caption">{text}</Typography>
    </React.Fragment>

)
const dataFragment = (text) => (
    <React.Fragment>
        <Typography variant="button">{text}</Typography>
    </React.Fragment>

)

PersonalInfo.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PersonalInfo);