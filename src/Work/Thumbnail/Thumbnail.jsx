import React from 'react';
// import WorkTitle from '../WorkTitle/WorkTitle';
import { Link } from 'react-router-dom';
import './Thumbnail.scss';

const Thumbnail = ({ featuredImage, alt, slug }) => (
  <div className="work-thumbnail">
    <Link to={`/work/${slug}`}>
      <div
        className="work-thumbnail-image"
        alt={alt}
        style={{ backgroundImage: `url(${featuredImage})` }}
      />
    </Link>
    {/* <WorkTitle title={title} slug={slug} /> */}
  </div>
);

export default Thumbnail;
