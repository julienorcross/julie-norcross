import React from 'react';
import './Display.scss';

const Display = ({ images, description }) => {
  return (
    <div className="Display">
      <div className="flex">
        {images.map(image => (
          <div>
            <img src={image.url} alt={images.alt} className="img" />
          </div>
        ))}
      </div>
      <p className="caption">{description}</p>
    </div>
  );
};

export default Display;
