import React, { useContext } from 'react';
import '../stylesheets/BasketPopOut.css';
import { BasketContext } from '../contexts/BasketContext';

export default function BasketPopOut({ display }) {
    const { basket, setBasket } = useContext(BasketContext);
    const displayClass = display === true ? "fadeOut" : "" ;

    const basketPrice = basket.reduce((a,b) => {return a + (b.price * b.quantity)}, 0);
    const basketQuantity = basket.reduce((a,b) => {return a + b.quantity}, 0);

    function BasketItem({ item }) {
        return (
            <section className='basketSection basketPacer'>
                <span id='imgHolder'>
                    <img src={require(`../assets/${item.img_url}.jpg`)} />
                </span>
                <p>{item.name} (x{item.quantity})</p>
                <p>£{(item.price * item.quantity).toFixed(2)} </p>
            </section>
        )
    }

    if (basket.length === 0) return (
        <div id="BasketPopOut">
            <p id="basketEmpty" className='basketPacer'>
                Your basket is currently empty.
            </p>
        </div>
      )

  return (
    <div id="BasketPopOut" className={`${displayClass}`}>
        <p className='basketPacer'>Your Basket:</p>
        {basket.map( i => <BasketItem item={i} key={i.id}/>)}
        <section id="basketEnd" className='basketPacer'>
            <p>Total:</p> 
            <p id="basketTotal">£{basketPrice.toFixed(2)}</p>
        </section>
    </div>
  )
}
