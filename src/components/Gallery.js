import React from 'react';
import ImageGallery from 'react-image-gallery';
import * as COLORS from '../constants/colors';

import 'react-image-gallery/styles/css/image-gallery.css';

function renderImage(item) {
  return (
    <div className="image-gallery-image">
      <img
        src={item.original}
        alt={item.title || ''}
        style={{
          height: '100vh',
          width: '100vw',
          objectFit: 'scale-down',
          fontFamily: "'object-fit: scale-down'",
          background: COLORS.BLACK,
        }}
      />
    </div>
  );
}

const Gallery = ({ images }) => (
  <ImageGallery
    items={images}
    showThumbnails={false}
    renderItem={renderImage}
  />
);

export default Gallery;
