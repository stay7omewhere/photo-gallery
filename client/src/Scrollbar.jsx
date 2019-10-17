import React from 'react';
import styles from './scrollbar.css';

var Scrollbar = function({photos, currentPhotoIndex, viewPhotoHandler}) {
  return (
    <div>
      {photos.map((photo, index) => {
        return (
          <button key={index} disabled={index === currentPhotoIndex} onClick={() => viewPhotoHandler(index)}>
            <img className={styles.img} src={photo.url}></img>
          </button>
        );
      })}
    </div>
  );
};

export default Scrollbar;
