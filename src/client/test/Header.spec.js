import React from 'react';
import Header from '../components/Header';

describe('Header', () => {
	it('renders Cardzzz!', () => {
		const actual = shallow(<Header />);
		expect(actual.get(0)).toMatchSnapshot();
	});
});
