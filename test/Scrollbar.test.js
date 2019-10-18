import Scrollbar from '../client/src/Scrollbar.jsx';
import React from 'react';
import {shallow} from 'enzyme';

var photos = [
  {url: 'www.aws.com/0', description: 'desc0'},
  {url: 'www.aws.com/1', description: 'desc1'},
  {url: 'www.aws.com/2', description: 'desc2'}
];

describe('Scrollbar component unit tests', () => {
  describe('Render tests', () => {
    test('it should render the component', () => {
      const wrapper = shallow(<Scrollbar photos={photos} currentPhotoIndex={0} viewPhotoHandler={() => {}} />);
      expect(wrapper.exists()).toBe(true);
    });
  });
  describe('Interaction tests', () => {
    test('it should disable the thumbnail image/button of the currently displayed photo', () => {
      var mockClickHandler = jest.fn();
      const wrapper = shallow(<Scrollbar photos={photos} currentPhotoIndex={0} viewPhotoHandler={mockClickHandler} />);
      expect(wrapper.find({disabled: true}).key()).toBe('0');
    });
    test('it should call the viewPhotoHandler fn with the index of the photo clicked', () => {
      var mockClickHandler = jest.fn();
      const wrapper = shallow(<Scrollbar photos={photos} currentPhotoIndex={0} viewPhotoHandler={mockClickHandler} />);
      wrapper.findWhere(n => n.key() === '1').simulate('click');
      wrapper.findWhere(n => n.key() === '2').simulate('click');
      expect(mockClickHandler).toHaveBeenNthCalledWith(1, 1);
      expect(mockClickHandler).toHaveBeenNthCalledWith(2, 2);
    });
  });
});
