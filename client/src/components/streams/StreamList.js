import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamsList extends Component {
    componentDidMount() {
        this.props.fetchStreams()
    }

    // Allows user to edit or delete stream only if it's theirs //
    renderPermissionsButtons(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            )
        }
    }

    //Renders button, Allows user to create stream is they're signed in // 
    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    renderStreamsList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderPermissionsButtons(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderStreamsList()}</div>
                {this.renderCreate()}
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    // Use Object.values to turn into array of objects for mapping //
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamsList)