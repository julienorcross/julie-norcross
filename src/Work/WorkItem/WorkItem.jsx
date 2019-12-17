import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import './WorkItem.scss';
import WorkIntro from '../WorkIntro/WorkIntro';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const WorkItem = ({ item }) => {
  if (!item) {
    return <Redirect to="/404" />;
  }
  return (
    <div className="work-item-wrapper">
      <WorkIntro item={item} />
      <Carousel
        showStatus={false}
        dynamicHeight
        showArrows={false}
        showIndicators={false}>
        {item.slideshow.map(img => {
          return (
            <div key={img.url} className="custom-slide">
              <img src={img.url} alt={img.alt} className="responsive" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default WorkItem;
