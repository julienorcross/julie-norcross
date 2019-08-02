import React, { Component } from 'react';
import './ImageShowcase.scss';

class ImageShowcase extends Component {
  constructor(props) {
    super(props);
    this.state = { main: this.props.imgs[0] };
  }

  switchMain(path) {
    this.setState({ main: path });
  }

  render() {
    const thumbnails = this.props.imgs.map(path => (
      <img
        src={path}
        className="opera-spread"
        onClick={e => this.switchMain(path)}
      />
    ));

    return (
      <div className="showcase">
        <img src={this.state.main} className="opera-spread-main" alt="" />
        {thumbnails}
      </div>
    );
  }
}

export default ImageShowcase;
