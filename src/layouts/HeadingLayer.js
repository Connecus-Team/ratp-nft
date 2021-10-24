import React from 'react';
import Heading from '../components/Heading';

function HeadingLayer(props) {
  const {children} = props;
  return (
    <div className="nft-page-container">
      <Heading/>
      <div className="body-container">
        { children }
      </div>
    </div>
  );
}


export default HeadingLayer;

