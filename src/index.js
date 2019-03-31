import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from "./components/common/routes";
import 'typeface-roboto';
import { createBrowserHistory, createHashHistory } from 'history';
import { Router } from 'react-router-dom';
import "./index.css";
import { initialize } from "./helpers/database";

initialize();

const configureHistory = () => {
    return window.matchMedia('(display-mode: standalone)').matches
        ? createHashHistory()
        : createBrowserHistory()
}
const history = configureHistory();

ReactDOM.render((
    <Router history={history} basename={process.env.PUBLIC_URL}>
        <Routes />
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
