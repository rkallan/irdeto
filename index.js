import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configure, history } from './config/configure-store';

import App from './containers/App/App';
import './assets/styles/main.css';

const store = configure();
const documentBody = document.body;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.querySelector('.root')
);

if (module.hot) {
    module.hot.accept('./containers/App/App', () => {
        const NextApp = require('./containers/App/App').default;
        ReactDOM.render(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <NextApp />
                </ConnectedRouter>
            </Provider>,
            document.querySelector('.root')
        );
    });
    window.store = store;
}

window.addEventListener("mousemove", function() {
    if (documentBody.getAttribute('accessibility') !== 'mouse') {
        documentBody.setAttribute('accessibility', 'mouse');
    }
});

window.addEventListener("keydown", function() {
    if (documentBody.getAttribute('accessibility') !== 'keyboard') {
        documentBody.setAttribute('accessibility', 'keyboard');
    }
});


window.addEventListener("touchstart", function() {
    if (documentBody.getAttribute('accessibility') !== 'touch') {
        documentBody.setAttribute('accessibility', 'touch');
    }
});

registerServiceWorker();