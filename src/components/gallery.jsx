import React from 'react';

const Gallery = ({images}) => {
  return (
    <div>
      <img className="img" src={images} alt="images"/>
    </div>
  );
};

export default Gallery;