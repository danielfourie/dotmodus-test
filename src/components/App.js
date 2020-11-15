import React from 'react';
import ArticlesList from './ArticlesList';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Route
				exact
				path="/"
				component={ArticlesList}
			/>
		</BrowserRouter>
	)
}

export default App;