import Preview from '../client/src/Preview.jsx';
import React from 'react';
import {shallow} from 'enzyme';
const mockFn = jest.fn();

var photos = [{url: 'www.aws.com/0', description: 'desc0'}, {url: 'www.aws.com/1', description: 'desc1'}];

describe('Preview component unit tests', () => {
  describe('Render tests', () => {
    test('it should render the component', () => {
      const wrapper = shallow(<Preview photos={photos} viewPhotoHandler={() => {}} />);
      expect(wrapper.exists()).toBe(true);
    });
  });
  describe('Interaction tests', () => {
    test('it should call the click handler function with index 0 when the view photos button is clicked', () => {
      var mockClickHandler = mockFn;
      const wrapper = shallow(<Preview photos={photos} viewPhotoHandler={mockClickHandler} />);
      wrapper.find('button').simulate('click');
      expect(mockClickHandler).toHaveBeenCalled();
      expect(mockClickHandler).toHaveBeenCalledWith(0);
    });
    test('it should call the click handler function with a specific index when a photo is clicked', () => {
      var mockClickHandler = mockFn;
      const wrapper = shallow(<Preview photos={photos} viewPhotoHandler={mockClickHandler} />);
      wrapper.find('img').at(1).simulate('click');
      expect(mockClickHandler).toHaveBeenCalled();
      expect(mockClickHandler).toHaveBeenCalledWith(1);
    });
  });
});
