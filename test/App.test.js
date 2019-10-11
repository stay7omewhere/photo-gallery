import App from '../client/src/App.jsx';
import React from 'react';
import {shallow} from 'enzyme';

describe('App component', () => {
  test('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
