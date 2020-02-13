import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import './WorkItem.scss';
import WorkIntro from '../WorkIntro/WorkIntro';
import Display from '../Display/Display';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const WorkItem = ({ item }) => {
  if (!item) {
    return <Redirect to="/404" />;
  }

  return (
    <div className="work-item-wrapper">
      <WorkIntro item={item} />
      {item.slideshow && (
        <Carousel
          showStatus={false}
          dynamicHeight
          // showArrows={true}
          // showIndicators={true}
          // thumbWidth="20px"
          // swipeScrollTolerance="2"
        >
          {item.slideshow.map(img => {
            return (
              <div key={img.url} className="custom-slide">
                <img src={img.url} alt={img.alt} className="responsive" />
              </div>
            );
          })}
        </Carousel>
      )}
      {item.display && (
        <Display images={item.display} description={item.displayDescription} />
      )}
    </div>
  );
};

export default WorkItem;
