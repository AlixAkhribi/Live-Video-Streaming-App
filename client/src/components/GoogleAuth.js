import React, { Component } from 'react';
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions/index';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
    };

    onSignInClick = () => {
        this.auth.signIn()
    };

    onSignOutClick = () => {
        this.auth.signOut()
    };

    renderAuthButton = () => {

        switch (this.props.isSignedIn) {
            case true:
                return (
                    <button onClick={this.onSignOutClick} className="ui red google button">
                        <i className="google icon" />
                        Sign Out
                    </button>);
            case false:
                return (
                    <button onClick={this.onSignInClick} className="ui green google button">
                        <i className="google icon" />
                        Sign In
                    </button>);
            default:
                return null;
        }
    };

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)