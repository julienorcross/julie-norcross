import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import './WorkItem.scss';
import WorkIntro from '../WorkIntro/WorkIntro';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const WorkItem = ({ item, match }) => {
  useEffect(() => {
    // mount
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    // unmount
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  // useState
  const [width, setWidth] = useState(window.innerWidth);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  const findItem = workItem => {
    return workItem.slug === match.params.workSlug;
  };

  const findAspectRatio = item => {
    let aspectRatio = 10;
    item.slideshow.map(img => {
      if (img.aspectRatio < aspectRatio) {
        aspectRatio = img.aspectRatio;
      }
    });
    return calculateImageHeight(aspectRatio);
  };

  const calculateImageHeight = aspectRatio => {
    if (width >= 964) {
      return aspectRatio * 900;
    } else {
      return aspectRatio * (width - 64);
    }
  };

  // const item = this.props.items.find(this.findItem);
  // console.log(item);
  // const { item } = this.props;
  if (!item) {
    return <Redirect to="/404" />;
  }
  // const height = '500px';
  const height = findAspectRatio(item);
  return (
    <div className="work-item-wrapper">
      <WorkIntro item={item} />
      <Carousel showStatus={false} showArrows={false} showIndicators={false}>
        {item.slideshow.map(img => {
          return (
            <div
              key={img.url}
              className="custom-slide"
              // ref={myInput}
              style={{ height }}>
              <img src={img.url} alt={img.alt} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default WorkItem;
