import logo from './logo.svg';
import './App.css';

// export const App = () => {
// 	const currentYear = new Date().getFullYear(); //декларативный
// 	return (
// 		//декларативный
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<p>{currentYear}</p>
// 			</header>
// 		</div>
// 	);
// };

import { createElement } from 'react';

export const App = () => {
	const currentYear = new Date().getFullYear(); //декларативный
	return (
		/*#__PURE__*/
		//декларативный
		createElement(
			'div',
			{
				className: 'App',
			},
			/*#__PURE__*/ createElement(
				'header',
				{
					className: 'App-header',
				},
				/*#__PURE__*/ createElement('img', {
					src: logo,
					className: 'App-logo',
					alt: 'logo',
				}),
				/*#__PURE__*/ createElement(
					'p',
					null,
					'Edit ',
					/*#__PURE__*/ createElement('code', null, 'src/App.js'),
					' and save to reload.',
				),
				/*#__PURE__*/ createElement(
					'a',
					{
						className: 'App-link',
						href: 'https://reactjs.org',
						target: '_blank',
						rel: 'noopener noreferrer',
					},
					'Learn React',
				),
				/*#__PURE__*/ createElement('p', null, currentYear),
			),
		)
	);
};
