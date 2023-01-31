import data from '../data/placeholder.json';
import React from 'react';
import '../stylesheets/Item.css'
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';

export default function Item() {
    const location = useParams();
    const item = data[location.num];

    if (item === undefined) return <ErrorPage errorType={404} />

  return (
    <div id="Item">
      <section id="itemContainer">
        <h1>
          {item.name}
        </h1>
        <img src={require(`../assets/${item.img_url}.jpg`)} alt="This item" />
        <p>
          {item.description}
        </p>
        <p id="itemPrice">
          £{item.price.toFixed(2)}
        </p>
        <p>
          <button>
            Add to Basket
          </button>
        </p>
      </section>
    </div>
  )
}
