import React from 'react';
import {mount} from 'react-mounter';
// load React components
import {App} from './components/App/App.jsx';
import {Nav} from './components/App/Nav/Nav.jsx';
import {Dashboard} from './components/App/Dashboard/Dashboard.jsx';
import {RequestForm} from './components/App/RequestForm/RequestForm.jsx';
import {NewNinja} from './components/App/NewNinja/NewNinja.jsx';
import {NinjaList} from './components/App/NinjaList/NinjaList.jsx';

FlowRouter.route("/", {
  action() {
    mount(App, {
      nav: <Nav />,
      content: <Dashboard />
    });
  }
});

FlowRouter.route("/request", {
  action() {
    mount(App, {
      nav: '',
      content: <RequestForm />
    });
  }
});

FlowRouter.route("/new-ninja", {
  action() {
    mount(App, {
      nav: <Nav />,
      content: <NewNinja />
    });
  }
});

FlowRouter.route("/ninjas", {
  action() {
    mount(App, {
      nav: <Nav />,
      content: <NinjaList />
    });
  }
});
