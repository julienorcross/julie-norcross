import React, { Component } from 'react';
import './WorkItem.scss';
import WorkIntro from '../WorkIntro/WorkIntro';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

let width = 0;

class WorkItem extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    this.state = { width: window.innerWidth };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  findItem = workItem => {
    return workItem.slug === this.props.match.params.workSlug;
  };

  calculateImageHeight = item => {
    if (this.state.width >= 964) {
      return item.aspectRatio * 900;
    } else {
      return item.aspectRatio * (this.state.width - 64);
    }
  };

  render() {
    const item = this.props.items.find(this.findItem);
    const height = this.calculateImageHeight(item);
    return (
      <div className="work-item-wrapper">
        <WorkIntro item={item} />
        <Carousel showArrows={false} showIndicators={false}>
          {item.images.map(imgPath => {
            return (
              <div
                className="custom-slide"
                ref={this.myInput}
                style={{ height }}>
                <img src={imgPath} />
              </div>
            );
          })}
        </Carousel>
        {/* <ImageShowcase imgs={item.images} /> */}
      </div>
    );
  }
}

export default WorkItem;
