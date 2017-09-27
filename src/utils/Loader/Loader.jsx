import React, { Component } from 'react';

// Assets: Styles & Images
import './assets/styles/Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className='container' data-component='loader'>
        <div className='loader'>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--text'></div>
        </div>
      </div>  
    );
  }
}

export default Loader;