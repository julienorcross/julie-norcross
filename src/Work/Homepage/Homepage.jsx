import React from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import './Homepage.scss';

const Homepage = ({ items }) => {
  console.log(items);
  return (
    <div className="work">
      {items.map(function(currentItem) {
        return (
          <Thumbnail
            key={currentItem.title}
            alt={currentItem.featuredImage.alt}
            featuredImage={currentItem.featuredImage.sizes.large}
            // mainImagePath={currentItem.f}
            slug={currentItem.slug}
          />
        );
      })}{' '}
    </div>
  );
};

export default Homepage;
