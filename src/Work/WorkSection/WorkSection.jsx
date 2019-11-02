import React from 'react';
import WorkThumbnail from '../WorkThumbnail/WorkThumbnail';
import './WorkSection.scss';

const WorkSection = ({ items }) => {
  return (
    <div className="work">
      {items.map(function(currentItem) {
        return (
          <WorkThumbnail
            key={currentItem.title}
            alt={currentItem.thumbnailAlt}
            thumbnailPath={currentItem.thumbnailPath}
            mainImagePath={currentItem.mainImagePath}
            slug={currentItem.slug}
          />
        );
      })}{' '}
    </div>
  );
};

export default WorkSection;
