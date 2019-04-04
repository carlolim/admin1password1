import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import Toolbar from "../common/toolbar/toolbar-with-backbutton";
import { selectAll } from "../../data-access/generic";

const styles = theme => ({
    content: {
        padding: 20
    },
});

class Search extends Component {
    state = {
        isSearching: false,
        savedFaces: [],
        detectedFace: null
    }

    componentDidMount = async () => {
        var savedFaces = await selectAll("faceDescriptor");
        if (savedFaces.length === 0) {
            this.setState({ ...this.state, hasSavedFaces: false });
        }
        else {
            this.setState({ ...this.state, savedFaces });
        }
        this.streamVid();
    }

    streamVid = async () => {
        const videoEl = document.getElementById('inputVideo')
        navigator.getUserMedia(
            { video: {} },
            stream => videoEl.srcObject = stream,
            err => console.error(1,err)
        )
    }

    render() {
        return (
            <>
                <Toolbar buttons={[]} title="Search" showBackButton={true} onBack={() => { this.props.history.goBack() }} />
                <div className={this.props.classes.content}>
                    <div style={{position: 'relative'}} className="margin">
                        <video onPlay={this.streamVid.bind(this)} id="inputVideo" autoPlay={true} muted></video>
                        <canvas id="overlay" />
                    </div>
                </div>
            </>
        )
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Search);