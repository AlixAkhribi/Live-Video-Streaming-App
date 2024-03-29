import React, { Component } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import history from '../../history';
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onDeleteStream = () => {
        this.props.deleteStream(this.props.match.params.id)
    }

    renderActions() {
        return (
            <React.Fragment>
                <button onClick={this.onDeleteStream}className="ui button negative">Delete</button>
                <Link to={"/"} className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete the stream: ${this.props.stream.title}`
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                description={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateTopProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateTopProps, { fetchStream, deleteStream })(StreamDelete)