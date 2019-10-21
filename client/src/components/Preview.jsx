import React from 'react';
import Share from './Share.jsx';
import {PreviewDiv, ListingActions, ArrowBox, Heart, ShareListing, SaveListing, ViewPhotos, PhotosContainer, PrimaryImg, Img, SecondaryImgsContainer, SecondaryImg} from '../styled_components/preview.js';

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
