import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { configure, history } from "./config/configure-store";

// NPM Modules
import { Switch, Route } from "react-router-dom";
// import { withRouter } from "react-router";
import { Helmet } from "react-helmet";

// Components
//import { AuthComponent, AuthMiddlewares, AuthReducer } from 'react-redux-auth0'
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";

import Home from "./containers/Home/Home";
import Cryptocurrency from "./containers/Cryptocurrency/Cryptocurrency";
import About from "./containers/About/About";
import Faq from "./containers/Faq/Faq";
import Error404 from "./containers/ErrorPage/Error404";

// Router
import ScrollToTop from "./containers/Router/ScrollToTop";

//import App from './containers/App/App';
import "./assets/styles/main.css";

const store = configure();
const documentBody = document.body;

const Root = () => {
  return (
    <div className="app-wrapper">
      <Helmet>
        <title>Test Ravi</title>
      </Helmet>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/cryptocurrency" component={Cryptocurrency} />
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={Error404} />
        </Switch>
      </ScrollToTop>
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.querySelector(".root")
);

if (module.hot) {
  module.hot.accept(<Root />, () => {
    const NextApp = Root;
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NextApp />
        </ConnectedRouter>
      </Provider>,
      document.querySelector(".root")
    );
  });
  window.store = store;
}

window.addEventListener("mousemove", function() {
  if (documentBody.getAttribute("accessibility") !== "mouse") {
    documentBody.setAttribute("accessibility", "mouse");
  }
});

window.addEventListener("keydown", function() {
  if (documentBody.getAttribute("accessibility") !== "keyboard") {
    documentBody.setAttribute("accessibility", "keyboard");
  }
});

window.addEventListener("touchstart", function() {
  if (documentBody.getAttribute("accessibility") !== "touch") {
    documentBody.setAttribute("accessibility", "touch");
  }
});

registerServiceWorker();
