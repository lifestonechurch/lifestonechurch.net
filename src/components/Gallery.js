import React from 'react';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

const Gallery = ({ images }) => (
  <ImageGallery items={images} showThumbnails={false} />
);

export default Gallery;
