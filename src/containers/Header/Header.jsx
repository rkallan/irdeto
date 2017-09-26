import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Logo from '../../utils/Logo/Logo'
import Navigation from '../Navigation/Navigation'
import Title from '../../utils/Title/Title'

// Assets: Styles & Images
import './assets/styles/Header.css';
const title = 'Cryptocurrency Threshold Evaluator (past 24hrs)';

class Header extends Component {
  render() {
    return (
      <header className='container' data-component='header'>
        <div className='row'>
          <div className='col' data-grid-col='col-tablet-1-12'>
            <Logo />  
          </div>
          <div className='col' data-grid-col='col-tablet-10-12'>
            <Navigation />
          </div>  
        </div>
        <div className='row'>
          <div className='col' data-grid-col='col-tablet-12-12'>
            <Title title={title} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;