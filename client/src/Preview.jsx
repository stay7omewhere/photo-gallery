import React from 'react';
import Share from './Share.jsx';
import styled from 'styled-components';

var PreviewDiv = styled.div`
  margin: 80px 0 0 0;
  height: 47vh;
  position: relative;
`;

var ListingActions = styled.div` {
  position: absolute;
  z-index: 1;
  top: 24px;
  right: 24px;
`;

var ArrowBox = styled.svg`
  height: 15px;
  width: 15px;
  margin-right: 12px;
  fill-opacity: 0;
  stroke: rgb(72, 72, 72);
  stroke-width: 2.25;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

var Heart = styled.svg`
  height: 15px;
  width: 15px;
  margin-right: 12px;
  fill-opacity: 0;
  stroke: rgb(72, 72, 72);
  stroke-width: 2.25;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

var Button = styled.button`
  cursor: pointer;
  outline: none;
  color: #484848;
  padding: 6px 15px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 450;
  line-height: 22px;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px;
  border-radius: 4px;
  border-color: transparent;
`;

var ShareListing = styled(Button)`
  margin-right: 18px;
`;

var SaveListing = styled(Button)`
  right: 0px;
`;

var ViewPhotos = styled(Button)`
  position: absolute;
  z-index: 1;
  right: 24px;
  bottom: 24px;
`;

var PhotosContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  :hover > * {
    filter: brightness(70%);
    transition: filter 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
  :hover > *:hover {
    filter: brightness(100%);
    transition: filter 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
  `;

var PrimaryImg = styled.div`
  height: 47vh;
  width: 67%;
  overflow: hidden;
  outline: 1px solid rgb(72, 72, 72);
  border-left: 1px solid rgb(72, 72, 72);
  border-right: 1px solid rgb(72, 72, 72);
`;

var Img = styled.img`
  max-width: 100%;
  cursor: pointer;
  transform: scale(1);
  transition: transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  :hover {
    transform: scale(1.05);
    transition: transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`;

var SecondaryImgsContainer = styled.div`
  height: 47vh;
  width: 33%;
  display: flex;
  flex-direction: column;
  position: relative;
  :hover > * {
    filter: brightness(70%);
    transition: filter 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
  :hover > *:hover {
    filter: brightness(100%);
    transition: filter 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`;

var SecondaryImg = styled.div`
  height: 50%;
  overflow: hidden;
  outline: 1px solid rgb(72, 72, 72);
  border-left: 1px solid rgb(72, 72, 72);
  border-right: 1px solid rgb(72, 72, 72);
`;

var arrowStemSvgPathDef = 'm11.5 16v-15';
var arrowTipSvgPathDef = 'm7.5 4 4-3 4 3';
var partialBoxSvgPathDef = 'm5.4 9.5h-3.9v14h20v-14h-3.1';
var heartSvgPathDef = 'm17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6';

var Preview = function({photos, viewPhotoHandler, showShare, closePopup, showPopup}) {
  var photoCount = photos.length;
  return (
    photoCount > 1 &&
    <div>
      <PreviewDiv>
        <ListingActions>
          <ShareListing onClick={() => showPopup('showShare')}>
            <ArrowBox viewBox="0 0 24 24">
              <g fillRule="evenodd">
                <path d={arrowStemSvgPathDef}></path>
                <path d={arrowTipSvgPathDef}></path>
                <path d={partialBoxSvgPathDef}></path>
              </g>
            </ArrowBox>Share
          </ShareListing>
          <SaveListing>
            <Heart viewBox="0 0 24 24">
              <path d={heartSvgPathDef}></path>
            </Heart>Save
          </SaveListing>
        </ListingActions>
        <ViewPhotos onClick={() => viewPhotoHandler(0)}>View Photos</ViewPhotos>
        <PhotosContainer>
          <PrimaryImg>
            <Img key={0} src={photos[0].url} onClick={() => viewPhotoHandler(0)}></Img>
          </PrimaryImg>
          <SecondaryImgsContainer>
            <SecondaryImg>
              <Img key={1} src={photos[1].url} onClick={() => viewPhotoHandler(1)}></Img>
            </SecondaryImg>
            <SecondaryImg>
              <Img key={2} src={photos[2].url} onClick={() => viewPhotoHandler(2)}></Img>
            </SecondaryImg>
          </SecondaryImgsContainer>
        </PhotosContainer>
      </PreviewDiv>
      {showShare && <Share closePopup={closePopup} />}
    </div>
  );
};

export default Preview;
