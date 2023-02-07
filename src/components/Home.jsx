import React from 'react'
import '../stylesheets/Home.css'
import data from '../data/placeholder.json'
import { Link } from 'react-router-dom';

const images = [
  'pexels-david-bartus-1166209',
  'pexels-eberhard-grossgasteiger-1287145',
  'pexels-ezra-comeau-2387418',
  'pexels-francesco-ungaro-2325446',
  'pexels-jaime-reimer-2662116',
  'pexels-pixabay-147411',
  'pexels-tyler-lastovich-808465'
];

function Standout(props) {
  const { id, category } = props;
  const item = data[id];
  const linkCat = category ? `?t=${category}` : "/" ;
  const textCat = category ? category.slice(3) : "All" ;

  return (
    <span>
      <Link to={`/shop${linkCat}`} className='standoutImg'>
        <img src={require(`../assets/${item.img_url}.jpg`)} 
          alt={`SideThing${id}`} />
      </Link>
      <p>Our Premium Selection</p>
      <p onClick={()=>{}}>
        {textCat} Items
      </p>
    </span>
  )
}

function Marquee(props) {
  const { id } = props;
  const item = data[id];
  
  const first = props.first ? ' first' : "";

  return (
    <Link to={`/shop/${id-1}`} className={`conveyorItem${first}`}>
      <img src={require(`../assets/${item.img_url}.jpg`)} 
            alt={`item${id}`} />
    </Link>
  )
}

function Home() {
  const marqueeArray = [1,2,3,4,5,6,7]

  return (
    <div id='Home'>
      <section id="headlines">
        <Link to={`/shop/${1}`} id='mainImage'>
          <img src={require(`../assets/${images[1]}.jpg`)} 
              alt='MainThing' />
        </Link>
        <Link to={`/shop/${0}`} className='sideImage'>
          <img src={require(`../assets/${images[0]}.jpg`)} 
              alt='SideThingOne' />
        </Link>
        <Link to={`/shop/${4}`} className='sideImage'>
          <img src={require(`../assets/${images[4]}.jpg`)} 
              alt='SideThingTwo' />
        </Link>
      </section>
      <h1 id="tagline">Next Day Delivery available on most items.</h1>
      <section id="conveyor">
        <Marquee id={1} first={true}/>
        {marqueeArray.slice(1).map((i)=>{
          return (
            <Marquee id={i} key={`Marquee1-${i}`}/>
          )
        })}
        {marqueeArray.map((i)=>{
          return (
            <Marquee id={i} key={`Marquee2-${i}`}/>
          )
        })}
      </section>
      <section className="standouts">
        <Standout id={2} category={"catOne"}/>
        <Standout id={5} category={"catTwo"}/>
        <Standout id={1} category={"catThree"}/>
      </section>
      <section id="offer">
        <p>
          Spend £150 with us for free same day delivery
          <br />
          <button>
            Read More
          </button>
        </p>
        <img src={require('../assets/pexels-francesco-ungaro-2325446.jpg')} 
            alt='MainThing' />
      </section>
      <section className="standouts">
        <Standout id={3} category={"catFour"}/>
        <Standout id={7} category={"catFive"}/>
        <Standout id={6} category={null}/>
      </section>
    </div>
  )
}

export default Home


