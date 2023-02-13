import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { BasketContext } from '../contexts/BasketContext'
import '../stylesheets/Checkout.css'

export default function Checkout() {
    const { basket, setBasket } = useContext(BasketContext)
    const [ alertWindow, setAlertWindow ] = useState(true);

    const basketPrice = basket.reduce((a,b) => {return a + (b.price * b.quantity)}, 0);
    const basketQuantity = basket.reduce((a,b) => {return a + b.quantity}, 0);

    function removeItem(i) {
        const newBasket = i.quantity <= 1 ?
        basket.filter((e)=>{
            if (e.id !== i.id) return e
        })
        :
        basket.map((e)=>{
            if (e.id !== i.id) return e
            else {
                i.quantity--
                return i
            }
        })
        setBasket(newBasket);
    }

    function BasketItem({ item }) {
        return (
            <section className='checkoutItem'>
                <img src={require(`../assets/${item.img_url}.jpg`)} />
                <p>{item.name}</p>
                <p>{item.quantity} in basket (£{item.price} each)</p>
                <p>£{(item.price * item.quantity).toFixed(2)} </p>
                <span id='removalLink' onClick={()=>removeItem(item)}>
                    Remove from basket
                </span>
            </section>
        )
    }

    if (basket.length === 0) return (
        <div id="Checkout">
            <p id="checkoutEmpty">
                Your basket is currently empty.
            </p>
        </div>
      )

    function preventConfusion() {
        if (!alertWindow) return;
        setAlertWindow(false);
        alert("This is a demo website with no payment methods built in. Clicking this button will direct to an error page only.")
    }

  return (
    <div id="Checkout">
        Your Basket ({basketQuantity} total items):
        {basket.map( i => <BasketItem item={i} key={i.id}/>)}
        <section id="checkoutEnd">
            <p>Total:</p> 
            <p id="checkoutTotal">£{basketPrice.toFixed(2)}</p>
            <br />
            <Link to={"/errorpage"} >
                <button onMouseOver={()=>preventConfusion()}>
                    Proceed
                </button>
            </Link>
        </section>
    </div>
  )
}
