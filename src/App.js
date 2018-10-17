import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import './App.css';  
import { PrivateRoute } from './_helpers';
import {
  LoginPage,ForgotPassword,PageNotFound,HomePage
} from './_components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router> 
              <div className="routes">
                <Switch>           
                  <Route exact path='/login' component={LoginPage} /> 
                  <Route exact path='/forgot-password' component={ForgotPassword} />                   
                  <PrivateRoute path='/' component={HomePage} />
                  <Route path='/404' component={PageNotFound} />
                  <Redirect from='*' to='/404' />
                </Switch> 
              </div> 
            </Router>
      </div>
    );
  }
}

export default App;
