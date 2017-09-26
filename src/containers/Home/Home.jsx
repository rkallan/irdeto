import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// NPM Modules
import { Helmet } from "react-helmet";

// Assets: Styles & Images
import './assets/styles/Home.css';

// Actions
import { ExampleActions } from '../../redux/example';

class Home extends React.Component {
  render() {
    return (
      <main className="container" data-component='main' data-page="home">
        <Helmet>
            <title>Test Home</title>
        </Helmet>
        <p className='intro-text'>
          To get started, edit <code>src/containers/app/App.js</code> and save to reload.
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


export default connect(mapStateToProps, mapDispatchToProps)(Home)
