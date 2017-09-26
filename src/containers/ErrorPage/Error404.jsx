import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// NPM Modules
import { Helmet } from "react-helmet";

// Assets: Styles & Images
//import './assets/styles/Faq.css';

// Actions
import { ExampleActions } from '../../redux/example';

class Error404 extends React.Component {
  render() {
    return (
      <main className="container" data-component='main' data-page="error">
        <Helmet>
            <title>ERROR: Can not find the page</title>
        </Helmet>
        <p className='intro-text'>
        ERROR: Can not find the page
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


export default connect(mapStateToProps, mapDispatchToProps)(Error404)
