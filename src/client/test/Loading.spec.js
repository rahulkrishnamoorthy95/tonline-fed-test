import React from 'react';
import Loading from '../components/Loading';

describe('Loading', () => {
	it('renders Loading...', () => {
		const actual = shallow(<Loading />);
		expect(actual.get(0)).toMatchSnapshot();
    });
    
    it('should load based on isLoading', () => {
        const props = {
            isLoading: false
        };
        let wrapper = mount(<Loading {...props} />);    
        expect(wrapper.prop('isLoading')).toEqual(false);

        props.isLoading = true;
        wrapper = mount(<Loading {...props} />);    
        expect(wrapper.prop('isLoading')).toEqual(true);
      });
});