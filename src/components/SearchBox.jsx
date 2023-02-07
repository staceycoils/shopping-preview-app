import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/placeholder.json';
import '../stylesheets/SearchBox.css'

export default function SearchBox({ searchTerm }) {
    let dataCopy = [...data];
    let newData = {};
    
    dataCopy.forEach((item) => {
        for (const key in item) {
            if (
                item[key].toString().includes(searchTerm)
            ) {
                newData[key] === undefined ?
                newData = {
                    ...newData,
                    [key]: [item]
                } :
                newData[key].push(item);  
            };
        };
    });

    function SearchReturn() {
        if (!newData) return;
        return Object.keys(newData).map((i)=>{
            return <SearchSection key={`searchSection${i}`} 
                section={i}/>
        })
    }

    function SearchSection({ section }) {
        const firstSection = section === "name" ? " searchTop" : "" ;
        return (
            <section className={`searchSection${firstSection}`}>
                <p className='searchSectionTitle'>
                    Results matching {
                        section === "img_url" ? "image name" : section
                    }.
                </p>
                {newData[section].map((i, index)=>{
                    return <ReturnBox item={i} 
                    key={`searchItem${section}${index}`}/>
                })}
            </section>
        )
    }

    function ReturnBox({ item }) {
        return (
            <Link to={`/shop/${item.id}`} className='searchResult'>
                <img src={require(`../assets/${item.img_url}.jpg`)}
                        alt={`Item${item.id}`}/>
                <span>{ item.name }</span>
                <span>£{ item.price.toFixed(2) }</span>
            </Link>
        )
    }

    if (Object.keys(newData).length === 0) return (
        <div id="searchResults">
            <section className='searchSection'>
                We were unable to find any items matching '{searchTerm}'.
            </section>
        </div>
    )

  return (
    <div id="searchResults">
        <SearchReturn />
    </div>
  )
}
