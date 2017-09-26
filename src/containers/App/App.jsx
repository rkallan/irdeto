/***
 * Entry point of the app that renders other containers with react router
 * @
 */
// @flow

import React, { Component } from 'react';
//import PropTypes from 'prop-types';

// NPM Modules
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Helmet } from "react-helmet";

// Components
//import { AuthComponent, AuthMiddlewares, AuthReducer } from 'react-redux-auth0'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Home from '../Home/Home';
import Cryptocurrency from '../Cryptocurrency/Cryptocurrency';
import About from '../About/About';
import Faq from '../Faq/Faq';
import Error404 from '../ErrorPage/Error404'

// Router
import ScrollToTop from '../Router/ScrollToTop';

import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Helmet>
            <title>Test Ravi</title>
        </Helmet>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/faq' component={Faq} />
            <Route exact path='/cryptocurrency' component={Cryptocurrency} />
            <Route exact path='/' component={Home} />
            <Route exact path='*' component={Error404} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
