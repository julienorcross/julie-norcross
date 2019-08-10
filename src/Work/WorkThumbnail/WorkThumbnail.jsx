import React from 'react';
// import WorkTitle from '../WorkTitle/WorkTitle';
import { Link } from 'react-router-dom';
import './WorkThumbnail.scss';

const WorkItem = ({ thumbnailPath, title, slug }) => (
  <div className="work-thumbnail">
    <Link to={`/work/${slug}`}>
      <img className="work-thumbnail-image" alt={title} src={thumbnailPath} />
    </Link>
    {/* <WorkTitle title={title} slug={slug} /> */}
  </div>
);

export default WorkItem;
