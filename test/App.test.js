import App from '../client/src/components/App.jsx';
import Preview from '../client/src/components/Preview.jsx';
import Slideshow from '../client/src/components/Slideshow.jsx';
import React from 'react';
import {shallow} from 'enzyme';

describe('App component unit tests', () => {
  describe('Render tests', () => {
    test('it should render the component', () => {
      const wrapper = shallow(<App listingId={0}/>);
      expect(wrapper.exists()).toBe(true);
    });
    test('if showSlideshow is false it should render the Preview component', () => {
      const wrapper = shallow(<App listingId={0}/>);
      expect(wrapper.state('showSlideshow')).toBe(false);
      expect(wrapper.find(Preview).exists()).toBe(true);
      expect(wrapper.find(Slideshow).exists()).toBe(false);
    });
    test('if showSlideshow is true it should render the Slideshow component', () => {
      const wrapper = shallow(<App listingId={0}/>);
      wrapper.setState({showSlideshow: true});
      expect(wrapper.state('showSlideshow')).toBe(true);
      expect(wrapper.find(Preview).exists()).toBe(false);
      expect(wrapper.find(Slideshow).exists()).toBe(true);
    });
  });
});
