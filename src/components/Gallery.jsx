import React from 'react';

const Gallery = ({images, name}) => {
  return (
    <div>
      <img width="200" height="257" src={images} alt={name}/>
    </div>
  );
};

export default Gallery;