import React from 'react';
import './WorkIntro.scss';

const WorkIntro = props => {
  const createMarkup = () => {
    return { __html: props.item.description };
  };

  const { featuredImage, title, subtitle } = props.item;

  return (
    <div className="work-intro-wrapper">
      <div
        className="work-intro-img"
        style={{
          backgroundImage: `url(${featuredImage.url})`
        }}
      />
      <div className="work-intro-text">
        <h2 className="work-intro-title">{title}</h2>
        <h3 className="work-intro-subtitle">
          {'//'} {subtitle}
        </h3>
        <div className="description">
          <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    </div>
  );
};

export default WorkIntro;
