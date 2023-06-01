import React from 'react';
import './Card.css';
import Title from "./components/title";
import Gallery from "./components/gallery";
import BodyTitle from "./components/body-title";
import Description from "./components/description";

const Card = ({product}) => {
  return (
    <section>
      <div className="card">
        <div className="card__title">
          <Title title={product.title} />
          <button className="button__title" type="button">View all episodes</button>
        </div>
        <div className="card__wrapper">
          <Gallery images={product.src}/>
          <div className="card__body">
            <button className="body__button" type="button">Gear</button>
            <h2>Episode {product.episode}</h2>
            <BodyTitle cardTitle={product.name}/>
            <Description desc={product.description}/>
            <button className="bottom__button" type="button">View Episode Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;