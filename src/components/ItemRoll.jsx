import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import data from '../data/placeholder.json';
import '../stylesheets/ItemRoll.css'
import logo from '../logo.svg';

function ItemSection(props) {
    const id = props.num;
    const { data } = props;

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

function ItemLineup(props) {
    const { limit, type } = props;
    const typedData = data.filter((i)=>{return i.categories.includes(type)})

    if (type) {
        return typedData.slice(0, limit).map((i, index)=>{ return (
        <ItemSection num={index} key={`ItemSection${index}`} data={typedData}/>
    )})}

    return data.slice(0, limit).map((i, index)=>{ return (
        <ItemSection num={index} key={`ItemSection${index}`} data={data}/>
    )})
}

function LoadingBar(props) {
    const { limit } = props;
    if (limit < data.length) return (
        <p id='LoadingBar'>
            <img src={logo} id="loadingSpinner" alt="loading spinner"/>
        </p>
    )
}

export default function ItemRoll() {
    const location = useLocation();
    const navigate = useNavigate();
    const [ limit, setLimit ] = useState(24);
    const type = !location.search ? null :
        location.search.slice(3);

    window.addEventListener("scroll", extendScrolling);

    function extendScrolling() {
        const scrollTop = document.documentElement.scrollTop;    
        const scrollHeight = document.documentElement.scrollHeight;    
        const scrollBottom = scrollTop + document.documentElement.clientHeight;    
        const endOfScroll = scrollBottom / scrollHeight >= 0.95;

        if (endOfScroll) {
            setLimit(limit + 12);
        }
    }

    function changeType(t) {
        navigate(`/shop?t=${t}`)
    }

  return (
      <div id="ItemRoll">
        <section id="FilterBar">
            <select onChange={(e)=>{changeType(e.target.value)}}>
                <option value="catOne">Category One</option>
                <option value="catTwo">Category Two</option>
                <option value="catThree">Category Three</option>
                <option value="catFour">Category Four</option>
                <option value="catFive">Category Five</option>
            </select>
        </section>
        <section id="ItemContainer">
          <ItemLineup limit={limit} type={type}/>
        </section>
        <LoadingBar limit={limit}/>
      </div>
  )
}
