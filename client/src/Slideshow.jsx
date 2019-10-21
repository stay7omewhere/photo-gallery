import React from 'react';
import Scrollbar from './Scrollbar';
import styled from 'styled-components';

var Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  outline: none;
  height: 88px;
  width: 88px;
  border: 0px;
`;

var CloseX = styled.svg`
  margin: 0 auto;
  height: 24px;
  width: 24px;
  fill: rgb(72, 72, 72);
`;

var ImgPanel = styled.div`
  height: 55vh;
  padding: 40px;
`;

var ImgPanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

var Img = styled.img`
  position: absolute;
  pointer-events: none;
  cursor: pointer;
  border-radius: 16px;
  height: 55vh;
  max-width: 85%;
`;

var Direction = styled.button`
  cursor: pointer;
  outline: none;
  height: 55vh;
  width: 50%;
  border: 0px;
`;

var PreviousArrow = styled.svg`
  float: left;
  height: 24px;
  width: 24px;
  margin: 0 auto 0 20px;
  fill: rgb(72, 72, 72);
`;

var NextArrow = styled.svg`
  float: right;
  height: 24px;
  width: 24px;
  margin: 0 20px 0 auto;
  fill: rgb(72, 72, 72);
`;

var ScrollbarDiv = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  height: 64px;
`;

var ImgText = styled.div`
  max-width: 80%;
  margin: 15px auto 0;
  color: rgb(72, 72, 72);
  font-size: 16px;
  line-height: 1.375em;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

var ImgOrder = styled.div`
  font-weight: 400;
`;

var ImgDescription = styled.div`
  margin: 15px auto 0;
  font-weight: 200;
`;

var closeXSvgPathDef = 'm23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22';
var previousArrowSvgPathDef = 'm13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z';
var nextArrowSvgPathDef = 'm4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z';

var Slideshow = function({photos, currentPhotoIndex, viewPhotoHandler, closeSlideshow}) {
  var currentPhoto = photos[currentPhotoIndex];
  // set previous/next indexes to loop through photos
  var previousPhotoIndex = (currentPhotoIndex === 0) ? photos.length - 1 : currentPhotoIndex - 1;
  var nextPhotoIndex = (currentPhotoIndex === photos.length - 1) ? 0 : currentPhotoIndex + 1;
  return (
    <div>
      <Close id="close-slideshow" onClick={closeSlideshow}>
        <CloseX viewBox="0 0 24 24">
          <path fillRule="evenodd" d={closeXSvgPathDef}></path>
        </CloseX>
      </Close>
      <ImgPanel>
        <ImgPanelContainer>
          <Direction id="previous-photo" onClick={() => viewPhotoHandler(previousPhotoIndex)}>
            <PreviousArrow viewBox="0 0 18 18">
              <path fillRule="evenodd" d={previousArrowSvgPathDef}></path>
            </PreviousArrow>
          </Direction>
          <Img src={currentPhoto.url}></Img>
          <Direction id="next-photo" onClick={() => viewPhotoHandler(nextPhotoIndex)}>
            <NextArrow viewBox="0 0 18 18">
              <path fillRule="evenodd" d={nextArrowSvgPathDef}></path>
            </NextArrow>
          </Direction>
        </ImgPanelContainer>
      </ImgPanel>
      <div>
        <ScrollbarDiv><Scrollbar photos={photos} currentPhotoIndex={currentPhotoIndex} viewPhotoHandler={viewPhotoHandler}/></ScrollbarDiv>
        <ImgText>
          <ImgOrder id="photo-order">{currentPhotoIndex + 1} / {photos.length}</ImgOrder>
          <ImgDescription>{currentPhoto.description}</ImgDescription>
        </ImgText>
      </div>
    </div>
  );
};

export default Slideshow;
