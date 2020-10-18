import React from 'react';
import App from './App';
import Header from './client/components/Header';
import Dashboard from './client/components/Dashboard';
import Footer from './client/components/Footer';

describe('App', () => {
	it('renders the Hello world', () => {
		const props = {
			Header,
			Dashboard,
			Footer
		};
		const actual = shallow(<App {...props}/>);
		expect(actual.getElements()).toMatchSnapshot();
	});
});
