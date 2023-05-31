import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductCard from "./ProductCard";
import {product} from './components/mock';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductCard product={product}/>);

