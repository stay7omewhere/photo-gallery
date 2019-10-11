import React from 'react';

var Preview = function({photos, viewPhotoHandler}) {
  return (
    <div>
      {photos.map((photo, index) => <img key={index} src={photo.url} height="200" onClick={() => viewPhotoHandler(index)}></img>)}
      <button onClick={() => viewPhotoHandler(0)}>View Photos</button>
    </div>
  );
};

export default Preview;
