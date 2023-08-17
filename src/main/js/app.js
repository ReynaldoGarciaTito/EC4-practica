const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const App = require('./pages/home');
const PageNuevoMusico = require('./pages/nuevo-musico');

const router = createBrowserRouter([
	{path: '/', element: <App></App>},
	{path: '/nuevo-musico', element: <PageNuevoMusico></PageNuevoMusico>},
]);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router}>
		</RouterProvider>
	</React.StrictMode>,
	document.getElementById('react')
)