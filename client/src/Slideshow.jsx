import React from 'react';
import styles from './slideshow.css';

var Slideshow = function({photos, currentPhotoIndex, viewPhotoHandler, closeSlideshow}) {
  var currentPhoto = photos[currentPhotoIndex];
  // set previous/next indexes to loop through photos
  var previousPhotoIndex = (currentPhotoIndex === 0) ? photos.length - 1 : currentPhotoIndex - 1;
  var nextPhotoIndex = (currentPhotoIndex === photos.length - 1) ? 0 : currentPhotoIndex + 1;
  return (
    <div>
      <button id="previous-photo" className={styles.previous} onClick={() => viewPhotoHandler(previousPhotoIndex)}>
        <svg viewBox="0 0 18 18" role="presentation" aria-label="Previous" aria-hidden="true" focusable="false" style={{height: '24px', width: '24px', fill: 'rgb(72, 72, 72)'}}>
          <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path>
        </svg>
      </button>
      <img src={currentPhoto.url} height="350"></img>
      <button id="next-photo" className={styles.next} onClick={() => viewPhotoHandler(nextPhotoIndex)}>
        <svg viewBox="0 0 18 18" role="presentation" aria-label="Next" aria-hidden="true" focusable="false" style={{height: '24px', width: '24px', fill: 'rgb(72, 72, 72)'}}>
          <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path>
        </svg>
      </button>
      <button id="close-slideshow" className={styles.close} onClick={closeSlideshow}>
        <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{height: '24px', width: '24px', display: 'block', fill: 'rgb(72, 72, 72)'}}>
          <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path>
        </svg>
      </button>
      <div id="photo-order">{currentPhotoIndex + 1} / {photos.length}</div>
      <div>{currentPhoto.description}</div>
    </div>
  );
};

export default Slideshow;
