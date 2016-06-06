//Some features in ES6 cannot be transpiled by Babel, hence the polyfill.
//Use smaller, granual polyfills instead, because the polyfill that is used
//here is quite large (50k minified).
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
//The provider attaches a store to a react container component.
import {Provider} from 'react-redux';
//BrowserHistory provides cleaner urls, but are only compatible
//with modern browser's html5 push state.
//Hash urls are the counter part.
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//In case of a server side rendered, you might need an initial state.
const store = configureStore(/*initialState*/);
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
