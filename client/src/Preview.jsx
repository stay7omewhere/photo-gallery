import React from 'react';
import styles from './preview.css';

var Preview = function({photos, viewPhotoHandler}) {
  var photoCount = photos.length;
  return (
    photoCount > 1 &&
    <div className={styles.layoutContainer}>
      <div className={styles.primaryImg}>
        <img className={styles.img} key={0} src={photos[0].url} onClick={() => viewPhotoHandler(0)}></img>
      </div>
      <div className={styles.secondaryImgsContainer}>
        <div className={styles.secondaryImg}>
          <img className={styles.img} key={1} src={photos[1].url} onClick={() => viewPhotoHandler(1)}></img>
        </div>
        <div className={styles.secondaryImg}>
          <img className={styles.img} key={2} src={photos[2].url} onClick={() => viewPhotoHandler(2)}></img>
        </div>
        <button className={styles.viewPhotos} onClick={() => viewPhotoHandler(0)}>View Photos</button>
      </div>
    </div>
  );
};

export default Preview;
