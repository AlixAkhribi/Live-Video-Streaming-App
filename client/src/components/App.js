import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <React.Fragment>
            <Header />
            <Route exact path="/" component={StreamList} />
            <Route exact path="/streams/show" component={StreamShow} />
            <Route exact path="/streams/new" component={StreamCreate} />
            <Route exact path="/streams/edit/:id" component={StreamEdit} />
            <Route exact path="/streams/delete/:id" component={StreamDelete} />
          </React.Fragment>
        </Router>
      </div>
    )
  }
}