import React from 'react';
import './WorkItem.scss';
import WorkIntro from '../WorkIntro/WorkIntro';
import ImageShowcase from '../ImageShowcase/ImageShowcase';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const WorkItem = props => {
  function findItem(workItem) {
    return workItem.slug === props.match.params.workSlug;
  }
  const item = props.items.find(findItem);
  return (
    <div className="work-item-wrapper">
      <WorkIntro item={item} />
      <ImageShowcase imgs={item.images} />
    </div>
  );
};

export default WorkItem;
