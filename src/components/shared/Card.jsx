import propTypes from 'prop-types';
import React from 'react';

function Card({ children, reverse }) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
  // return (
  //   <div
  //     className="card"
  //     style={{
  //       backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //       color: reverse ? '#fff' : 'rgba(0,0,0,0.4)',
  //     }}
  //   >
  //     {children}
  //   </div>
  // );
}

Card.defaultProps = {
  reverse: true,
};

Card.propTypes = {
  children: propTypes.node.isRequired,
  reverse: propTypes.bool,
};

export default Card;
