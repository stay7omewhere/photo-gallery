import React from 'react';

var Slideshow = function({photos, currentPhotoIndex, viewPhotoHandler, closeSlideshow}) {
  var currentPhoto = photos[currentPhotoIndex];
  var previousPhotoIndex = (currentPhotoIndex === 0) ? photos.length - 1 : currentPhotoIndex - 1;
  var nextPhotoIndex = (currentPhotoIndex === photos.length - 1) ? 0 : currentPhotoIndex + 1;
  return (
    <div>
      <button onClick={() => viewPhotoHandler(previousPhotoIndex)}>Previous</button>
      <img src={currentPhoto.url} height="350" onClick={() => viewPhotoHandler(nextPhotoIndex)}></img>
      <button onClick={() => viewPhotoHandler(nextPhotoIndex)}>Next</button>
      <button onClick={closeSlideshow}>Close Slideshow</button>
      <div>{currentPhotoIndex + 1} / {photos.length}</div>
      <div>{currentPhoto.description}</div>
    </div>
  );
};

export default Slideshow;
