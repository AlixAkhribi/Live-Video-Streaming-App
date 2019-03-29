import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

import StreamForm from './StreamForm'

class StreamCreate extends Component {
    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        return (
            <React.Fragment>
                <h3>Create Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </React.Fragment>
        )
    }
}

export default connect(null, { createStream })(StreamCreate)