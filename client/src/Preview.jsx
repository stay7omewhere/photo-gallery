import React from 'react';
import styles from './preview.css';

var Preview = function({photos, viewPhotoHandler}) {
  return (
    <div className={styles.imgPanel}>
      <div className={styles.imgPanelContainer}>
        <div className={styles.primaryItem}>
          <img className={styles.img} key={0} src={photos[0].url} onClick={() => viewPhotoHandler(0)}></img>
        </div>
        <div className={styles.secondaryItemsContainer}>
          <div className={styles.secondaryItem}>
            <img className={styles.img} key={1} src={photos[1].url} onClick={() => viewPhotoHandler(1)}></img>
          </div>
          <div className={styles.secondaryItem}>
            <img className={styles.img} key={2} src={photos[2].url} onClick={() => viewPhotoHandler(2)}></img>
          </div>
        </div>
      </div>
      <button className={styles.viewPhotos} onClick={() => viewPhotoHandler(0)}>View Photos</button>
    </div>
  );
};

export default Preview;
