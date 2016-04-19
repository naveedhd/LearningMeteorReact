import React from 'react';
import reactMixin from 'react-mixin';
import {ReactMeteorData} from 'meteor/react-meteor-data';

import {Login} from './Auth/Login/Login.jsx';

// define and export our App component
export default class App extends React.Component {
  getMeteorData() {
    return {
      loggedIn: !!Meteor.user()
    }
  }

  showLayout() {
    return (
      <div className="row">
        <div className="col-xs-3">
          {this.props.nav}
        </div>
        <div className="col-xs-9">
          {this.props.content}
        </div>
      </div>
    )
  }

  showLogin() {
    return (
      <div className="row">
        <div className="col-xs-12 text-center">
          <p>You must to logged in to do that.</p>
        </div>
        <Login />
      </div>
    )
  }

  render() {
    return (
      <div className="container-fluid main-container">
        <div className="row">
          { this.data.loggedIn ? this.showLayout() : this.showLogin() }
        </div>
      </div>
    );
  }
}


reactMixin(App.prototype, ReactMeteorData);
