import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                    <button className="ui button primary">
                        Edit
                    </button>
                    <button className="ui button negative">
                        Delete
                    </button>
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
                        {stream.title}
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
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    // Use Object.values to turn into array of objects for mapping //
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamsList)