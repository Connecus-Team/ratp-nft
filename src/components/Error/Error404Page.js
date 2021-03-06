import React from 'react';
import ErrorWrapper from './style';
import {Link} from 'react-router-dom';

const Error404Page = () => {
  return (
    <ErrorWrapper>
      <div className="exception">
        <div className="imgBlock">
          <div
            className="imgEle"
            style={{
              backgroundImage: `https://webartdevelopers.com/blog/wp-content/uploads/2018/09/404-SVG-Animated-Page-Concept.png`,
            }}
          />
        </div>
        <div className="content">
          <h1>404</h1>
          <div className="desc">Not Page</div>
        </div>
      </div>
    </ErrorWrapper>
  );
};

export default Error404Page;
