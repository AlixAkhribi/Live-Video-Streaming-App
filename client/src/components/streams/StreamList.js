import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamsList extends Component {
    componentDidMount() {
        this.props.fetchStreams()
    }


    renderStreamsList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
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
    return { streams: Object.values(state.streams) }
}

export default connect(mapStateToProps, { fetchStreams })(StreamsList)