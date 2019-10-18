import Slideshow from '../client/src/Slideshow.jsx';
import Scrollbar from '../client/src/Scrollbar.jsx';
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
      const wrapper = shallow(<Slideshow photos={photos} currentPhotoIndex={0} viewPhotoHandler={() => {}} closeSlideshow={() => {}} />);
      expect(wrapper.exists()).toBe(true);
    });
    test('it should display the correct order number per photo', () => {
      const wrapper = shallow(<Slideshow photos={photos} currentPhotoIndex={1} viewPhotoHandler={() => {}} closeSlideshow={() => {}} />);
      expect(wrapper.find('#photo-order').text()).toBe('2 / 3');
    });
    test('it should render a scrollbar', () => {
      const wrapper = shallow(<Slideshow photos={photos} currentPhotoIndex={0} viewPhotoHandler={() => {}} closeSlideshow={() => {}} />);
      expect(wrapper.find(Scrollbar).exists()).toBe(true);
    });
  });
  describe('Interaction tests', () => {
    test('it should call the closeSlideshow fn when the close slideshow button is clicked', () => {
      var mockClickHandler = jest.fn();
      const wrapper = shallow(<Slideshow photos={photos} currentPhotoIndex={0} viewPhotoHandler={() => {}} closeSlideshow={mockClickHandler} />);
      wrapper.find('#close-slideshow').simulate('click');
      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
    // testing click functionality when displaying first image in slideshow
    test('it should call the viewPhotoHandler fn with index 2 when the previous button is clicked for the first photo', () => {
      var mockClickHandler = jest.fn();
      const wrapper = shallow(<Slideshow photos={photos} currentPhotoIndex={0} viewPhotoHandler={mockClickHandler} closeSlideshow={() => {}} />);
      wrapper.find('#previous-photo').simulate('click');
      expect(mockClickHandler).toHaveBeenCalledWith(2);
    });
    test('it should call the viewPhotoHandler fn with index 1 when the next button is clicked for the first photo', () => {
      var mockClickHandler = jest.fn();
      const wrapper = shallow(<Slideshow photos={photos} currentPhotoIndex={0} viewPhotoHandler={mockClickHandler} closeSlideshow={() => {}} />);
      wrapper.find('#next-photo').simulate('click');
      expect(mockClickHandler).toHaveBeenCalledWith(1);
    });
    // testing click functionality when displaying middle image in slideshow
    test('it should call the viewPhotoHandler fn with index 0 when the previous button is clicked for the middle photo', () => {
      var mockClickHandler = jest.fn();
      const wrapper = shallow(<Slideshow photos={photos} currentPhotoIndex={1} viewPhotoHandler={mockClickHandler} closeSlideshow={() => {}} />);
      wrapper.find('#previous-photo').simulate('click');
      expect(mockClickHandler).toHaveBeenCalledWith(0);
    });
    test('it should call the viewPhotoHandler fn with index 2 when the next button is clicked for the middle photo', () => {
      var mockClickHandler = jest.fn();
      const wrapper = shallow(<Slideshow photos={photos} currentPhotoIndex={1} viewPhotoHandler={mockClickHandler} closeSlideshow={() => {}} />);
      wrapper.find('#next-photo').simulate('click');
      expect(mockClickHandler).toHaveBeenCalledWith(2);
    });
    // testing click functionality when displaying last image in slideshow
    test('it should call the viewPhotoHandler fn with index 1 when the previous button is clicked for the last photo', () => {
      var mockClickHandler = jest.fn();
      const wrapper = shallow(<Slideshow photos={photos} currentPhotoIndex={2} viewPhotoHandler={mockClickHandler} closeSlideshow={() => {}} />);
      wrapper.find('#previous-photo').simulate('click');
      expect(mockClickHandler).toHaveBeenCalledWith(1);
    });
    test('it should call the viewPhotoHandler fn with index 0 when the next button is clicked for the last photo', () => {
      var mockClickHandler = jest.fn();
      const wrapper = shallow(<Slideshow photos={photos} currentPhotoIndex={2} viewPhotoHandler={mockClickHandler} closeSlideshow={() => {}} />);
      wrapper.find('#next-photo').simulate('click');
      expect(mockClickHandler).toHaveBeenCalledWith(0);
    });
  });
});
