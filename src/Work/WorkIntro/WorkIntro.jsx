import React, { Component } from 'react';
import './WorkIntro.scss';

class WorkIntro extends Component {
  createMarkup() {
    return { __html: this.props.item.description };
  }

  render() {
    return (
      <div className="work-intro-wrapper">
        {this.props.item.pagePreview ? <div className="work-intro-img" /> : ''}
        <div className="work-intro-text">
          <h2>{this.props.item.title}</h2>
          <h3>{this.props.item.subtitle}</h3>
          <div className="description">
            <div dangerouslySetInnerHTML={this.createMarkup()} />
          </div>
        </div>
      </div>
    );
  }
}
export default WorkIntro;
