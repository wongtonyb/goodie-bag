import React from 'react';

const DisplayCandy = ({ name, description, quantity, imageUrl }) => {
  return (
    <div>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="quantity">{quantity}</div>
      <img className="imageUrl" src={imageUrl} />
    </div>
  );
};

export default DisplayCandy;
