import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCuDFtA-mgqkhowwvWyskacUZl-44fNHpk";

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));
