import React from 'react';

var Slideshow = function({photos, currentPhotoIndex, viewPhotoHandler, closeSlideshow}) {
  var currentPhoto = photos[currentPhotoIndex];
  // set previous/next indexes to loop through photos
  var previousPhotoIndex = (currentPhotoIndex === 0) ? photos.length - 1 : currentPhotoIndex - 1;
  var nextPhotoIndex = (currentPhotoIndex === photos.length - 1) ? 0 : currentPhotoIndex + 1;
  return (
    <div>
      <button id="previous-photo" onClick={() => viewPhotoHandler(previousPhotoIndex)}>Previous</button>
      <img src={currentPhoto.url} height="350" onClick={() => viewPhotoHandler(nextPhotoIndex)}></img>
      <button id="next-photo" onClick={() => viewPhotoHandler(nextPhotoIndex)}>Next</button>
      <button id="close-slideshow" onClick={closeSlideshow}>Close Slideshow</button>
      <div>{currentPhotoIndex + 1} / {photos.length}</div>
      <div>{currentPhoto.description}</div>
    </div>
  );
};

export default Slideshow;
