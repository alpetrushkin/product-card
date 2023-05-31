import React from 'react';

const Article = ({children}) => {
  return (
    <small>Артикул: {children}</small>
  );
};

export default Article;