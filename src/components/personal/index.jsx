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

const styles = theme => ({
    inline: {
        display: 'inline'
    }
});

class Index extends Component {
    showDetails = (id) => {
        this.props.history.push(`/personal/${id}`);
    }

    render() {
        return (
            <>
                <Toolbar buttons={[]} title="Personal informations" />
                <SearchBar />

                <div className="content">
                    <List>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
                            <ListItem button onClick={this.showDetails.bind(this, i)} key={i}>
                                <ListItemAvatar>
                                    <Avatar imgProps={{ onError: (e) => { e.target.src = PicPlaceholder; } }} src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText primary="My Details" />
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