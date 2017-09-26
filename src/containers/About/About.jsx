import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// NPM Modules
import { Helmet } from "react-helmet";

// Assets: Styles & Images
import './assets/styles/About.css';

// Actions
import { ExampleActions } from '../../redux/example';

class About extends React.Component {
  render() {
    return (
      <main className="container" data-component='main' data-page="about">
        <Helmet>
            <title>Test About</title>
        </Helmet>
        <p className='intro-text'>
          The about page
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


export default connect(mapStateToProps, mapDispatchToProps)(About)
