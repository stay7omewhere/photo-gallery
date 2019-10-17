import React from 'react';
import styles from './slideshow.css';

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
      <button id="close-slideshow" className={styles.close} onClick={closeSlideshow}>
        <svg className={styles.closeX} viewBox="0 0 24 24">
          <path fillRule="evenodd" d={closeXSvgPathDef}></path>
        </svg>
      </button>
      <div className={styles.imgPanel}>
        <div className={styles.imgPanelContainer}>
          <button className={styles.direction} id="previous-photo" onClick={() => viewPhotoHandler(previousPhotoIndex)}>
            <svg className={styles.previousArrow} viewBox="0 0 18 18">
              <path fillRule="evenodd" d={previousArrowSvgPathDef}></path>
            </svg>
          </button>
          <img className={styles.img} src={currentPhoto.url}></img>
          <button className={styles.direction} id="next-photo" onClick={() => viewPhotoHandler(nextPhotoIndex)}>
            <svg className={styles.nextArrow} viewBox="0 0 18 18">
              <path fillRule="evenodd" d={nextArrowSvgPathDef}></path>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className={styles.scrollbar}>SCROLLBAR PLACEHOLDER</div>
        <div className={styles.imgText}>
          <div className={styles.imgOrder} id="photo-order">{currentPhotoIndex + 1} / {photos.length}</div>
          <div className={styles.imgDescription}>{currentPhoto.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
