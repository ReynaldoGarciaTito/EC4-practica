const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

const App = require('./pages/home');

ReactDOM.render(
	<App />,
	document.getElementById('react')
)