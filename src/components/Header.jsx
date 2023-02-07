import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/Header.css';
import SearchBox from './SearchBox';

function CategoryBox({ showCategories, setShowCategories }) {
  if (!showCategories) return null;
  return (
    <div id="categoryBox" onMouseEnter={()=>{setShowCategories(true)}}
          onMouseLeave={()=>{setShowCategories(false)}}>
      <Link to={`/shop?t=catOne`}>
        <p>Category One</p></Link>
      <Link to={`/shop?t=catTwo`}>
        <p>Category Two</p></Link>
      <Link to={`/shop?t=catThree`}>
        <p>Category Three</p></Link>
      <Link to={`/shop?t=catFour`}>
        <p>Category Four</p></Link>
      <Link to={`/shop?t=catFive`}>
        <p>Category Five</p></Link>
    </div>
  )
}

function SearchResults({ showSearchbar, displayMessage }) {
  if (!showSearchbar || displayMessage === "") return null;

  return (
      <SearchBox searchTerm={displayMessage} />
  )
}

export default function Header() {
  const searchBoxRef = useRef(null);
  const location = useLocation();
  const [ showCategories, setShowCategories ] = useState(false);
  const [ showSearchbar, setShowSearchbar ] = useState(false);
  const [ query, setQuery ] = useState("");
  const [ displayMessage, setDisplayMessage ] = useState("");

  const searchClass = showSearchbar ? "searchBar" : "";

  useEffect(()=>{
    setShowCategories(false);
    setShowSearchbar(false);
  }, [location])

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDisplayMessage(query);
    }, 1000);
    return ()=>clearTimeout(timeOutId);
  }, [query]);

  function extendSearchbar() {
    setShowSearchbar(true);
    setTimeout(()=>{searchBoxRef.current.focus()}, 500) ;
  }

  function closeSearchbar() {
    setTimeout(()=>{
      setShowSearchbar(false);
      searchBoxRef.current.blur();
      searchBoxRef.current.value = null;
      setDisplayMessage("");
    }, 200);
  }

  return (
      <header className={`${searchClass}`}>
          {/* <img src={logo} alt='logo' /> */}
            <span onClick={(e)=>{extendSearchbar()}}>
              Search
            </span>
            <div className={`${searchClass}`} >
              <input type="text" id="searchBox" name="SearchBoxing" 
              ref={searchBoxRef} 
              onChange={(e)=>{setQuery(e.target.value)}}
              onBlur={()=>{closeSearchbar()}}
              />
            </div>
          <Link to={"/brands"}>
            <span >Brands</span>
          </Link>
          <span onMouseEnter={()=>{setShowCategories(true)}}
                onMouseLeave={()=>{setShowCategories(false)}}>
            Categories</span>
          <Link to={"/storefinder"}>
            <span>Store Finder</span>
          </Link>
          <Link to={"/account"}>
            <span>Account</span>
          </Link>
          <Link to={"/checkout"}>
            <span>Checkout</span>
          </Link>
          <CategoryBox showCategories={showCategories} setShowCategories={setShowCategories} />
          <SearchResults showSearchbar={showSearchbar} displayMessage={displayMessage}/>
      </header>
  )
}
