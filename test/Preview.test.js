import Preview from '../client/src/Preview.jsx';
import React from 'react';
import {shallow} from 'enzyme';

var photos = [
  {url: 'www.aws.com/0', description: 'desc0'},
  {url: 'www.aws.com/1', description: 'desc1'},
  {url: 'www.aws.com/2', description: 'desc2'}
];

describe('Preview component unit tests', () => {
  describe('Render tests', () => {
    test('it should render the component', () => {
      const wrapper = shallow(<Preview photos={photos} viewPhotoHandler={() => {}} showShare={false} closePopup={() => {}} showPopup={() => {}} />);
      expect(wrapper.exists()).toBe(true);
    });
  });
  describe('Interaction tests', () => {
    test('it should call the viewPhotoHandler fn with index 0 when the view photos button is clicked', () => {
      var mockClickHandler = jest.fn();
      const wrapper = shallow(<Preview photos={photos} viewPhotoHandler={mockClickHandler} showShare={false} closePopup={() => {}} showPopup={() => {}} />);
      wrapper.findWhere(n => n.text() === 'View Photos').find('button').simulate('click');
      expect(mockClickHandler).toHaveBeenCalledWith(0);
    });
    test('it should call the viewPhotoHandler fn with index 1 when the second photo is clicked', () => {
      var mockClickHandler = jest.fn();
      const wrapper = shallow(<Preview photos={photos} viewPhotoHandler={mockClickHandler} showShare={false} closePopup={() => {}} showPopup={() => {}} />);
      wrapper.find('img').at(1).simulate('click');
      expect(mockClickHandler).toHaveBeenCalledWith(1);
    });
  });
});
