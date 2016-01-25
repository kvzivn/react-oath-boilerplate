import React from 'react'; // do we rly need react here
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from './store/store';
import NotFound from './components/NotFound';
import AppContainer from './AppContainer';

const routes = (
	<Provider store={store}>
		<Router history={createHistory()}>
			<Route path="/" component={AppContainer} />
			<Route path="*" component={NotFound} />
		</Router>
	</Provider>
);

ReactDOM.render(routes, document.querySelector('#main'));
