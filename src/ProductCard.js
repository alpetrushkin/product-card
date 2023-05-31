import React from 'react';
import Title from "./components/Title";
import Article from "./components/Article";
import Gallery from "./components/Gallery";
import Price from "./components/Price";
import Counter from "./components/Counter";
import Description from "./components/Description";
import OldPrice from "./components/OldPrice";

const ProductCard = ({product}) => {
  return (
    <section>
      <div>
        <Title>{product.name}</Title>
        <Article>{product.code}</Article>
      </div>
      <div style={{display: 'flex'}}>
        <Gallery images={product.src} name={product.name}/>
        <div>
          <p style={{marginBottom: '20px'}}>Цена: <OldPrice oldPrice={product.oldPrice} /> <Price price={product.price} /> <br/>
          </p>
          <div style={{marginBottom: '20px'}}>
            Количество: <Counter />
          </div>
          <div style={{marginBottom: '20px'}}>Доставка: {product.delivery}</div>
          <button type="button">Купить</button>
        </div>
      </div>
      <div>
        <h2>Описание</h2>
        <Description description={product.description}/>
      </div>
    </section>
  );
};

export default ProductCard;