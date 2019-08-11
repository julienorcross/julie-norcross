import React from 'react';
import './WorkItem.scss';
import WorkIntro from '../WorkIntro/WorkIntro';
import ImageShowcase from '../ImageShowcase/ImageShowcase';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const WorkItem = props => {
  const item = props.items.find(findItem);

  function findItem(workItem) {
    return workItem.slug === props.match.params.workSlug;
  }

  // function calculateImageHeight(workItem) {
  //   workItem.aspectRatio;
  // }

  return (
    <div className="work-item-wrapper">
      <WorkIntro item={item} />
      <Carousel>
        {item.images.map(imgPath => {
          return (
            <div style={{ height: 400 }}>
              <img src={imgPath} />
            </div>
          );
        })}
      </Carousel>
      {/* <ImageShowcase imgs={item.images} /> */}
    </div>
  );
};

export default WorkItem;
