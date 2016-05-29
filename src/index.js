//Some features in ES6 cannot be transpiled by Babel, hence the polyfill.
//Use smaller, granual polyfills instead, because the polyfill that is used 
//here is quite large (50k minified).
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
//BrowserHistory provides cleaner urls, but are only compatible
//with modern browser's html5 push state.
//Hash urls are the counter part.
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
);
