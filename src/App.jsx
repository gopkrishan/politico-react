import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Notifications from 'react-notify-toast';
import NotFound from './components/NotFound';
import UnderConstruction from './components/UnderConstruction';
import Footer from './components/common/Footer';
import Hompage from './components/Hompage';
import SignupPage from './components/SignupPage';
import LoginPage from './container/login.container';
import UserPage from './container/userPage.container';
import store from './lib/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Notifications />
          <Switch>
            <Route path="/admin" component={UnderConstruction} />
            <Route path="/user" component={UserPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/page-not-found" component={NotFound} />
            <Route path="/" exact component={Hompage} />
            <Redirect to="/page-not-found" />
          </Switch>
          <div className="space" />
          <Footer />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
