import React from 'react';
import Viewmore from '../components/Viewmore';

describe('Viewmore', () => {

	it("should render initial layout", () => {
        const component = shallow(<Viewmore />);
        expect(component.getElements()).toMatchSnapshot();
    });
    
    it('should render based on hidden prop', () => {
        const props = {
            hidden: true
        };
        let wrapper = mount(<Viewmore {...props} />);    
        expect(wrapper.prop('hidden')).toEqual(true);

        props.hidden = false;
        wrapper = mount(<Viewmore {...props} />);    
        expect(wrapper.prop('hidden')).toEqual(false);
      });

      it('Test button click event', () => {
        const mockCallBack = jest.fn();
        const button = shallow(<Viewmore callback={mockCallBack} />);
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toBe(1);
      });

});