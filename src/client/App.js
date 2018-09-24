import React from 'react';
import './app.css';

import PicturesContainer from './pictures/picturesContainer';

export default function App() {
  return (
    <div>
      <div className="header">
        <h1>Picture gallery</h1>
      </div>
      <PicturesContainer />
    </div>
  );
}
