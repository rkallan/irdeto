import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// NPM Modules
import { Helmet } from "react-helmet";

// Assets: Styles & Images
import './assets/styles/Faq.css';

// Actions
import { ExampleActions } from '../../redux/example';

class Faq extends React.Component {
  render() {
    return (
      <main className="container" data-component='faq'>
        <Helmet>
            <title>Test FAQ</title>
        </Helmet>
        <div className="container">
          <div className="unit row">
            <div className="col">
              col
            </div>
          </div>
        </div>
        <p className='intro-text'>
          The FAQ page
        </p>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
})

const mapDispatchToProps = (dispatch) => ({
  exampleActions: bindActionCreators(ExampleActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Faq)
