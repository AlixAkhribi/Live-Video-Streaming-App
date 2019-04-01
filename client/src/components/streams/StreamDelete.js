import React, { Component } from 'react';
import Modal from '../Modal';

import history from '../../history';

export default class StreamDelete extends Component {
    renderActions() {
        return (
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                Delete Stream
                <Modal
                    title="Delete Stream"
                    description="Are you sure you want to delete this stream?"
                    actions={this.renderActions}
                    onDismiss={() => history.push('/')}
                />
            </React.Fragment>
        )
    }
}
