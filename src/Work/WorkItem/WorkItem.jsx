import React from 'react';
import './WorkItem.scss';

const WorkItem = props => {
  function findItem(workItem) {
    return workItem.slug === props.match.params.workSlug;
  }
  const item = props.items.find(findItem);
  function createMarkup() {
    return { __html: item.description };
  }
  return (
    <div className="work">
      <div className="title">
        <h2>{item.title}</h2>
        <h3>{item.subtitle}</h3>
      </div>
      <div className="description">
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default WorkItem;
