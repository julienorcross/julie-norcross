import React from 'react';
import './Display.scss';

const Display = ({ images, description }) => {
  return (
    <div className="Display">
      {images.map(image => (
        <div>
          <img src={image.url} alt={images.alt} className="img" />
        </div>
      ))}
    </div>
  );
};

export default Display;
