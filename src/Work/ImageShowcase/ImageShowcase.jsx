import React, { Component } from 'react';
import './ImageShowcase.scss';

class ImageShowcase extends Component {
  constructor(props) {
    super(props);
    this.state = { main: this.props.imgs[0] };
  }

  static defaultProps = { selected: 0 };

  setThumbnails() {
    let arr = [];
    for (let i = 0; i < this.props.imgs.length; i++) {
      arr.push(
        <div>
          <img
            src={this.props.imgs[i]}
            className={this.props.imgs[i] === this.state.main ? 'selected' : ''}
            onClick={e => this.switchMain(this.props.imgs[i])}
          />
        </div>
      );
    }
    return arr;
  }

  switchMain(path) {
    this.setState({ main: path });
  }

  render() {
    const thumbnails = this.setThumbnails();

    return (
      <div className="showcase">
        <img src={this.state.main} className="showcase-main" alt="" />
        <div className="showcase-thumbnails">{thumbnails}</div>
      </div>
    );
  }
}

export default ImageShowcase;
