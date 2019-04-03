import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import {
    Avatar, List,
    ListItem, ListItemAvatar, ListItemText
} from "@material-ui/core";
import Toolbar from "../common/toolbar/toolbar-with-navigation";
import SearchBar from "../common/toolbar/searchbar";
import PicPlaceholder from "../../images/user.png";
import NewRecord from "../common/new-record";
import { selectAll } from "../../data-access/generic";

const styles = theme => ({
    inline: {
        display: 'inline'
    }
});

class Index extends Component {
    state = {
        persons: []
    }

    componentDidMount = async () => {
        var persons = await selectAll("personal");
        this.setState({ persons });
    }

    showDetails = (id) => {
        this.props.history.push(`/personal/${id}`);
    }

    handleDisplayPicture = (picture) => {
        if (picture instanceof File) {
            return URL.createObjectURL(picture);
        }
        return PicPlaceholder;
    };

    render() {
        return (
            <>
                <Toolbar buttons={[]} title="Personal informations" />
                <SearchBar />
                <div className="content">
                    <List>
                        {this.state.persons.map((item, index) =>
                            <ListItem button onClick={this.showDetails.bind(this, item.personalId)} key={index}>
                                <ListItemAvatar>
                                    <Avatar imgProps={{ onError: (e) => { e.target.src = PicPlaceholder; } }} src={this.handleDisplayPicture(item.picture)} />
                                </ListItemAvatar>
                                <ListItemText primary={item.description} secondary={`${item.firstName} ${item.lastName}`} />
                            </ListItem>
                        )}
                    </List>
                </div>
                <NewRecord />
            </>
        )
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index);