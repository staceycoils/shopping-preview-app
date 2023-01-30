import React from 'react'
import '../stylesheets/Home.css'
import data from '../data/placeholder.json'

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
  const { id } = props;

  return (
    <span>
    <img src={require(`../assets/${images[id-1]}.jpg`)} 
        alt='SideThingOne' />
      <p>Our Premium Selection</p>
      <p onClick={()=>console.log("BUTTON")}>
        Shop Items
      </p>
    </span>
  )
}

function Marquee(props) {
  const { id } = props;
  
  const first = props.first ? ' first' : "";
  
  return (
      <img src={require(`../assets/${images[id-1]}.jpg`)} 
            alt={`item${id}`} className={`conveyorItem${first}`} />
  )
}

function Home() {
  const arr = [1,2,3,4,5,6,7]

  return (
    <div id='Home'>
      <section id="headlines">
        <img src={require('../assets/pexels-eberhard-grossgasteiger-1287145.jpg')} 
            alt='MainThing' id='mainImage'/>
        <img src={require('../assets/pexels-david-bartus-1166209.jpg')} 
            alt='SideThingOne' className='sideImage'/>
        <img src={require('../assets/pexels-jaime-reimer-2662116.jpg')} 
            alt='SideThingTwo' className='sideImage'/>
      </section>
      <h1 id="tagline">Next Day Delivery available on most items.</h1>
      <section id="conveyor">
        <Marquee id={1} first={true}/>
        {arr.slice(1).map((i)=>{
          return (
            <Marquee id={i} key={`Marquee1-${i}`}/>
          )
        })}
        {arr.map((i)=>{
          return (
            <Marquee id={i} key={`Marquee2-${i}`}/>
          )
        })}
      </section>
      <section className="standouts">
        <Standout id={2}/>
        <Standout id={5}/>
        <Standout id={1}/>
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
        <Standout id={3}/>
        <Standout id={7}/>
        <Standout id={6}/>
      </section>
    </div>
  )
}

export default Home


