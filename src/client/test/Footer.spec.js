import React from 'react';
import Footer from '../components/Footer';

describe('Footer', () => {
	it('renders Designed By: Name', () => {
		const actual = shallow(<Footer />);
		expect(actual.get(0)).toMatchSnapshot();
	});
});