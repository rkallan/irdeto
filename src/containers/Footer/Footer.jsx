import React, { Component } from 'react';

// Assets: Styles & Images
import './assets/styles/Footer.css';

import Navigation from '../Navigation/Navigation'

class Footer extends Component {
  render() {
    return (
      <footer className="container" data-component='footer'>
        <div className='row'>
            <div className='col' data-grid-col='col-tablet-12-12'>
              <p>Footer of the page</p>
              <Navigation />
            </div>
        </div>      
      </footer>
    );
  }
}
export default Footer;