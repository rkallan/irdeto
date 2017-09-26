import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Assets: Styles & Images
import './assets/styles/Logo.css';
import logo from './assets/images/logo.svg';

class Logo extends Component {
  render() {
    return (
      <div className='container' data-component='logo'>
        <Link className="link" to="/">
          <object type="image/svg+xml" data={logo} className="image">
            Your browser does not support SVGs
            We have to create a fallback img
          </object>
        </Link>
      </div>  
    );
  }
}
export default Logo;