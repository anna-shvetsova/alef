import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline, Container } from '@material-ui/core';
import store from './store';
import App from './components/app';

ReactDOM.render(
	<Fragment>
		<CssBaseline />
		<Container maxWidth='sm'>
			<Provider store={store}>
				<App />
			</Provider>
		</Container>
	</Fragment>
	, document.getElementById('root')
);

