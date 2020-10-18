import React from 'react';
import Card from '../components/Card';

describe('Card', () => {

    it("should render initial layout", () => {
        const component = shallow(<Card />);
        expect(component.getElements()).toMatchSnapshot();
    });

	it('renders null when no data found', () => {
        const props = {
            data: []
        };
		const actual = shallow(<Card {...props}/>);
		expect(actual.prop('data')).toEqual([]);
    });
    
    it('return card if data is not empty', () => {
        const props = {
            data: [{ id: '1', name: '', gender: 'male' }]
        };
        const wrapper = mount(<Card {...props} />);    
        expect(wrapper.prop('data').length).toBe(1);
    });
});