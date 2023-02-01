import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/placeholder.json';
import '../stylesheets/ItemRoll.css'

function ItemSection(props) {
    const id = props.num;

    return (
        <span className='ItemSection'>
            <Link to={`/shop/${id}`} >
                <img src={require(`../assets/${data[id].img_url}.jpg`)} 
                alt="this item"/>
            </Link>
            <p>
                <Link to={`/shop/${id}`} >{ data[id].name }</Link>
            </p>
            <p>£{ data[id].price.toFixed(2) }</p>
        </span>
    )
}

function ItemLineup() {
    return data.map((i, index)=>{ return (
            <ItemSection num={index} />
    )})
}

export default function ItemRoll() {
  return (
      <div id="ItemRoll">
        <section id="ItemContainer">
          <ItemLineup />
        </section>
      </div>
  )
}
