import React, { Component } from 'react';
import './app.css';

import PicturesContainer from './pictures/picturesContainer';

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="header">
          <h1>Picture gallery</h1>
        </div>
        <PicturesContainer />
      </div>
    );
  }
}
