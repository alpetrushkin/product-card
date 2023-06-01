import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from "./Card";
import {product} from './mock';

console.log(product)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Card  product={product}/>);

