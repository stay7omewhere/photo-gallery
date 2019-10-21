import React from 'react';
import {ScrollbarDiv, Thumbnail, Img} from '../styled_components/scrollbar.js';

var Scrollbar = function({photos, currentPhotoIndex, viewPhotoHandler}) {
  return (
    <ScrollbarDiv>
      {photos.map((photo, index) => (
        <Thumbnail key={index} disabled={index === currentPhotoIndex} onClick={() => viewPhotoHandler(index)}>
          <Img src={photo.url} />
        </Thumbnail>
      ))}
    </ScrollbarDiv>
  );
};

export default Scrollbar;
