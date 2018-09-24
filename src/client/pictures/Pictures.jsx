import React, { Component } from 'react';

import ModalControl from './ModalHOC';
import ThumbnailPicture from './ThumbnailPicture';

export default class Pictures extends Component {

  componentDidMount() {
    this.props.loadPicturesAction();
  }

  renderPictureThumbnail = () => this.props.pictures
    .map((item, index) => (
      <ModalControl
        item={item}
        index={index}
        component={ThumbnailPicture}
        {...this.props}
      >
        <ThumbnailPicture
          className="thumbnail"
          key={`${item.id}a`}
          {...this.props}
        />
      </ModalControl>
    ));

  render() {
    return (
      <div className="pictures-container modal-container">
        {this.renderPictureThumbnail()}
      </div>
    );
  }
}
