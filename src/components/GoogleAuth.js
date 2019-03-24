import React, { Component } from 'react'

export default class GoogleAuth extends Component {
    state = {
        isSignedIn: null,
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignInClick = () => {
        this.auth.signIn()
    };

    onSignOutClick = () => {
        this.auth.signOut()
    };

    renderAuthButton = () => {

        switch (this.state.isSignedIn) {
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
