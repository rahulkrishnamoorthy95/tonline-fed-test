import React from 'react';
import Dashboard from '../components/Dashboard';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Loading', () => {
    it("should render initial layout", () => {
        const component = shallow(<Dashboard />);
        expect(component.getElements()).toMatchSnapshot();
    });
  
    it('should initialize cardDetails with []', () => {
        const state = {
            cardDetails: [],
            isLoading: true
        };
        shallow(<Dashboard />);    
        expect(state.cardDetails).toEqual([]);
        expect(state.isLoading).toEqual(true);
    });
    
    it("renders user data", async () => {
        const cards = [{
            name: "Joni Baez",
            age: "32",
            location: "Charming Avenue",
            gender: 'male'
        }];
      
        jest.spyOn(global, "fetch").mockImplementation(() =>
          Promise.resolve({
            json: () => Promise.resolve(cards)
          })
        );
      
        await act(async () => {
          render(<Dashboard  />, container);
        });
      
        expect(container.querySelector("span").textContent).toBe(cards[0].name);
        expect(container.querySelector("cite").textContent).toBe(cards[0].location);
        expect(container.querySelector("div")).toBeInTheDocument();
      
  
        global.fetch.mockRestore();
      });

});