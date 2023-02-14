import data from '../data/placeholder.json';
import React, { useContext, useState } from 'react';
import '../stylesheets/Item.css'
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import { BasketContext } from '../contexts/BasketContext';
import BasketPopOut from './BasketPopOut';

export default function Item() {
    const { basket, setBasket } = useContext(BasketContext);
    const [ popOut, setPopOut ] = useState(false);
    const [ popOutFade, setPopOutFade ] = useState(false);
    const location = useParams();
    const item = data[location.num];

    function previewBasket() {
      setPopOut(true);
      setTimeout(()=>{
        setPopOutFade(true)
        setTimeout(()=>{
          setPopOut(false);
          setPopOutFade(false);
        }, 500);
      }, 1500);
    }

    function addToBasket(e) {
      e.target.disabled = true;
      const existingItemNum = basket.filter((i)=>{return i.id === item.id}).length;

      if (existingItemNum === 0) { setBasket([
        ...basket,
        {
          ...item,
          quantity: 1,
        }
      ])} else {
        const newBasket = [...basket];
        const index = basket.findIndex((i)=>i.id === item.id);
        newBasket[index].quantity++;
        setBasket(newBasket)
      }
      e.target.disabled = false;
      previewBasket();
    }

    if (item === undefined) return <ErrorPage errorType={404} />

  return (
    <div id="Item">
      {popOut ? <BasketPopOut display={popOutFade} item={item}/> : null}
      {/* <BasketPopOut display={popOutFade} item={item}/>  */}
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
          <button onClick={(e)=>{addToBasket(e)}}>
            Add to Basket
          </button>
        </p>
      </section>
    </div>
  )
}
