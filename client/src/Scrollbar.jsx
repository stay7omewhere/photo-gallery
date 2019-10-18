import React from 'react';
import styles from './scrollbar.css';

var Scrollbar = function({photos, currentPhotoIndex, viewPhotoHandler}) {
  return (
    <div className={styles.scrollbar}>
      {photos.map((photo, index) => {
        return (
          <button className={styles.thumbnail} key={index} disabled={index === currentPhotoIndex} onClick={() => viewPhotoHandler(index)}>
            <img className={styles.img} src={photo.url}></img>
          </button>
        );
      })}
    </div>
  );
};

export default Scrollbar;
